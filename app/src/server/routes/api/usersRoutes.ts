import { Router } from "express";
import { getUsers } from "server/views/users";

export const usersRoutes = (router: Router) => {
  const usersRouter: Router = Router();

  // чисто для теста
  usersRouter.get('/', getUsers);

  router.use('/users', usersRouter);
};
