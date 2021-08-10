import { COMMENTS_PER_PAGE } from "server/config";
import { getOffset, PagingData } from "server/helpers/pagination";
import { Comment } from "server/models/Comment";
import { Topic } from "server/models/Topic";
import { BaseRESTService } from "./BaseRESTService";

export type CreateCommentRequest = {
  topicId: number | string,
  username: string,
  text: string
}

export type ReadCommentsRequest = {
  topicId: string | number
  page?: string | number
}

export type ReadCommentsResponse = PagingData<Comment>

export type DeleteCommentRequest = {
  id: number | string
}


export class CommentsService implements BaseRESTService {
  public static create = (data: CreateCommentRequest) => {
    return Comment.create({
      text: data.text,
      topicId: data.topicId,
      username: data.username
    })
  }

  public static request = (data: ReadCommentsRequest) => {
    return Comment.findAndCountAll({
        include: {
          model: Topic,
          where: { id: data.topicId}
        },
        order: [
            ['createdAt', 'ASC']
        ],
        offset: getOffset(Number(data.page), COMMENTS_PER_PAGE),
        limit: COMMENTS_PER_PAGE,
        attributes: {exclude: ['topic']}
    });
  }

  public static delete = (data: DeleteCommentRequest) => {
    return Comment.destroy({
      where: {
        id: Number(data.id)
      }
    })
  }
}
