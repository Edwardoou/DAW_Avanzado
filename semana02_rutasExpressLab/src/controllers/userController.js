/**
 * *Nuestro archivo que contiene la logica de la app
 */

export const getIndex = (req, res) => {
  // cuando vamos a construir un API las respuestas
  // que enviemos deben ser en formato JSON
  // res tiene la opcion de poder enviar una formarto con JSON
  res.json({
    data: "test success",
  });
};

export const postLogin = (req, res) => {
  const { email, password } = req.body;
  res.json({
    data: {
      type: "login",
      email: email,
      password: password,
    },
  });
};
