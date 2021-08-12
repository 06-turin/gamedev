import { TOPICS_PER_PAGE } from 'server/config';
import { getOffset, PagingData } from 'server/helpers/pagination';
import { sequelize } from 'server/models';
import { Comment } from 'server/models/Comment';
import { Topic } from 'server/models/Topic';
import { BaseRESTService } from './BaseRESTService';

export type CreateTopicRequest = {
  username: string,
  title: string
}

export type ReadTopicsRequest = {
  page?: string | number
}

export type ReadTopicsResponse = PagingData<Topic>

export type FindTopicRequest = {
  id: number | string
}

export type FindTopicResponse = Topic

export type DeleteTopicRequest = FindTopicRequest

export class TopicsService implements BaseRESTService {
  public static create = (data: CreateTopicRequest) => Topic.create({
    title: data.title,
    owner: data.username,
    views: 0,
  })

  public static request = (data: ReadTopicsRequest): Promise<{rows: any[], count: number}> => {
    const offset = getOffset(Number(data.page), TOPICS_PER_PAGE);
    const limit = TOPICS_PER_PAGE;
    const query = `select "Topic" .*, COUNT("comments"."id") as "commentsCount"
                    from
                      "topics" as "Topic"
                    left join "comments" as "comments" on
                      "Topic"."id" = "comments"."topic_id"
                    group by "Topic"."id"
                    order by "Topic"."updatedAt" desc
                    limit ${limit} offset ${offset}`;

    const promiseRows = sequelize.query(query);
    const promiseTotalCountRows = Topic.count();

    return new Promise((resolve) => {
      Promise.all([promiseRows, promiseTotalCountRows])
        .then(([[results], totalCountRows]) => {
          resolve({
            rows: results,
            count: totalCountRows,
          });
        });
    });
  }

  public static find = (data: FindTopicRequest) => Topic.findOne({
    where: {
      id: Number(data.id),
    },
    include: {
      model: Comment,
      required: true,
    },
  })

  public static delete = (data: DeleteTopicRequest) => Topic.destroy({
    where: {
      id: Number(data.id),
    },
  })
}
