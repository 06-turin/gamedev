import { Request, Response } from "express";
import { RESPONSE_WRONG_REQUEST_DATA_TEXT } from "server/constants";
import { CreateTopicRequest, TopicsService } from "server/services/TopicsService";
import { is } from "typescript-is";

export class TopicsController {
  public static async create (req: Request, res: Response ) {

    if (!req.body || !is<CreateTopicRequest>(req.body)) {
      res
        .status(400)
        .send({error: RESPONSE_WRONG_REQUEST_DATA_TEXT});
      return;
    }

    try {
      const response = await TopicsService.create(req.body);
      res
        .status(200)
        .send(response)
    } catch (error) {
      res
        .status(500)
        .send(error)
    }

  }
}
