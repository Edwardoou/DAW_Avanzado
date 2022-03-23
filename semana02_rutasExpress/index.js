import express from "express";

const app = express(); // const 'app' para config. express
const port = 3000;
/**
 * * data -> String debido a que el array ocupa una gran cantidad de memoria
 * * json -> JSON de la DATA, se espera que no se manipule este tipo de json proveninente de un array, que solo se visualize o muestre
 */
const data =
  '[{"username": "Alex","lastname": "Ramos"},' +
  '{"username": "Trika","lastname": "World"}]';
const json = JSON.parse(data);

//middlewares
app.use(express.static("public")); //Permite el uso del directorio 'public'
app.use(express.json()); //Permite la manipulacion del JSON
app.all("/user", (req, res, next) => {
  console.log("Por aqui estamos");
  next();
});

//rutas user
app.get("/user", (req, res) => {
  res.json({
    username: "Alex",
    lastname: "Ramos",
  });
  console.log("Peticion GET recibida");
});

app.post("/user", (req, res) => {
  res.send("Peticion POST user");
});

app.put("/user", (req, res) => {
  res.send("Peticion PUT user");
});

app.delete("/user", (req, res) => {
  res.send("Peticion DELETE user");
});

//rutas about
app.get("/about", (req, res) => {
  console.log(json);
  for (let i = 0; i < json.length; i++) {
    console.log(
      "Nombre: " + json[i]["username"] + " y Apellido: " + json[i]["lastname"]
    );
  }
  res.send("Peticion GET about");
});

app.post("/about/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send(`Peticion POST ${req.params.id}`);
});

//listen en puerto
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
