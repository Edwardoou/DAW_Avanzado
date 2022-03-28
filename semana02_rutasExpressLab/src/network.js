//* Se llama network y no routes porque cada uno tendra su js de ruta, nombre routes esta deprecated
import { Router } from "express";
import {
  deleteUser,
  getIndex,
  getUserId,
  postLogin,
  postPassword,
  postSignUp,
  putUser,
} from "./controllers/userController.js";

const router = Router();

//rutas
router.route("/").get(getIndex);
router.route("/login").post(postLogin);
router.route("/sign-up").post(postSignUp);
router.route("/show-user/:id").get(getUserId);
router.route("/reset-password").post(postPassword);
router.route("/update-user/:id").put(putUser);
router.route("/delete-user/:id").delete(deleteUser);

export default router;
