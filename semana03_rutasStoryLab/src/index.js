import { app } from "./app";

// puertos recomendados por la comunidad son 3000 - 6000 - 9000 - 3001
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
