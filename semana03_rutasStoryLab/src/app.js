// * En app.js se va a instanciar express
import express from "express";
// import user from "./user/network.js";
import { user, story } from "./components";

export const app = express();

// * middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* rutas
// "/" es la raiz previa a las rutas del enrutador, que aqui es network
app.use("/user", user);
app.use("/story", story);
