import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import authMiddleare from "./app/middlewares/auth";
import multer from "multer";
import multerConfig from "./config/multer";

const routes = new Router();

const update = multer(multerConfig);
routes.post("/sessions", SessionController.store);
routes.use(authMiddleare);

routes.post("/files", update.single("file"), (req, res) => {
  return res.json({ ok: true });
});

routes.post("/users", UserController.store);

routes.put("/users", authMiddleare, UserController.update);

export default routes;
