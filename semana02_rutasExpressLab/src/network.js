//* Se llama network y no routes porque cada uno tendra su js de ruta, nombre routes esta deprecated
import { Router } from "express";
import { getIndex, postLogin } from "./controllers/userController.js";

const router = Router();

//rutas
router.route("/").get(getIndex);
router.route("/").get(postLogin);

export default router;
