import { app } from "./app";
import { Server } from "socket.io";
import http from "http";

const port = 3000;
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
    console.log("Mensaje: " + msg);
  });
});

server.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
