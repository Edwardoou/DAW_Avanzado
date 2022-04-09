import express from "express";

export const app = express();

app.use(express.static("src/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/chat.html");
});
