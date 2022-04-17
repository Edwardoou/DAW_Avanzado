//* Se llama network y no routes porque cada uno tendra su js de ruta, nombre routes esta deprecated
import { Router } from "express";
import * as controller from "./controller";
/* import {
  deleteUser,
  getIndex,
  getUserId,
  postLogin,
  postPassword,
  postSignUp,
  putUser,
} from "./controller.js"; */

const router = Router();

//rutas
router.route("/").get(controller.getIndex);
router.route("/login").post(controller.postLogin);
router.route("/sign-up").post(controller.createUser);
router.route("/show-user/:id").get(controller.getUserId);
router.route("/reset-password").post(controller.postPassword);
router.route("/update-user/:id").put(controller.updateUser);
router.route("/delete-user/:id").delete(controller.deleteUser);

export default router;
