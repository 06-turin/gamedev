import { Topic } from "server/models/Topic";
import { BaseRESTService } from "./BaseRESTService";

export type CreateTopicRequest = {
  username: string,
  title: string
}

export class TopicsService implements BaseRESTService {
  public static create = (data: CreateTopicRequest) => {
    return Topic.create({
      title: data.title,
      owner: data.username,
      views: 0
    })
  }
}
