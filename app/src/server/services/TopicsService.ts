import { TOPICS_PER_PAGE } from "server/config";
import { getOffset, PagingData } from "server/helpers/pagination";
import { Comment } from "server/models/Comment";
import { Topic } from "server/models/Topic";
import { BaseRESTService } from "./BaseRESTService";

export type CreateTopicRequest = {
  username: string,
  title: string
}

export type ReadTopicsRequest = {
  page?: string | number
}

export type ReadTopicsResponse = PagingData<Topic>

export type FindTopicRequest =  {
  id: number | string
}

export type FindTopicResponse = Topic

export type DeleteTopicRequest = FindTopicRequest

export class TopicsService implements BaseRESTService {
  public static create = (data: CreateTopicRequest) => {
    return Topic.create({
      title: data.title,
      owner: data.username,
      views: 0
    })
  }

  public static request = (data: ReadTopicsRequest) => {
    return Topic.findAndCountAll({
        order: [
            ['updatedAt', 'DESC']
        ],
        offset: getOffset(Number(data.page), TOPICS_PER_PAGE),
        limit: TOPICS_PER_PAGE
    });
  }

  public static find = (data: FindTopicRequest) => {
    return Topic.findOne({
      where: {
        id: Number(data.id)
      },
      include: {
        model: Comment,
        required: true
      }
    })
  }

  public static delete = (data: DeleteTopicRequest) => {
    return Topic.destroy({
      where: {
        id: Number(data.id)
      }
    })
  }
}
