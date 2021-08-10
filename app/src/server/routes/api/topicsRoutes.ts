import { Router } from "express";
import { TopicsController } from "server/controllers/TopicsController";

export const topicsRoutes = (router: Router) => {
  const topicsRouter: Router = Router();

  topicsRouter.post('/', TopicsController.create);

  router.use('/topics', topicsRouter);
};
