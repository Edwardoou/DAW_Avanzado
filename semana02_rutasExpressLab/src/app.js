// * En app.js se va a instanciar express
import express from "express";
import network from "./network.js";

export const app = express();

// * middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* rutas
// "/" es la raiz previa a las rutas del enrutador, que aqui es network
app.use("/", network);
