/**
 * *Nuestro archivo que contiene la logica de la app
 */

const DATA = [
  {
    id: 1,
    name: "Trika",
    lastname: "Mambo",
    email: "trika@mail.com",
    password: "trika123",
  },
  {
    id: 2,
    name: "Alex",
    lastname: "Ramos",
    email: "alex@mail.com",
    password: "alex123",
  },
  {
    id: 3,
    name: "Jesus",
    lastname: "Lujan",
    email: "sideral@mail.com",
    password: "sideral123",
  },
];

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
      email,
      password,
    },
  });
};

export const postSignUp = (req, res) => {
  const { name, lastname, email, password } = req.body;
  const id = DATA.length + 1;
  DATA.push({ id, name, lastname, email, password });
  res.json({
    data: {
      type: "signup",
      value: DATA[id - 1],
    },
  });
};

export const getUserId = (req, res) => {
  const { id } = req.params;
  let index = id - 1; //restar 1 para la busqueda en el array DATA que empieza en 0
  res.json({
    data: {
      type: "show",
      value: DATA[index],
    },
  });
};

export const postPassword = (req, res) => {
  const { email } = req.body;
  for (let i = 0; i < DATA.length; i++) {
    let correo = DATA[i]["email"];
    if (email === correo) {
      const { name, lastname, password: oldPassword } = DATA[i];
      res.json({
        type: "postPassword",
        value: { name, lastname, oldPassword },
      });
    }
  }
};

export const putUser = (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, password } = req.body;
  let index = id - 1;
  DATA[index] = { id, name, lastname, email, password }; //actualizar objeto segun INDEX de la DATA
  res.json(DATA); //toda la DATA actualizada
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  let index = id - 1;
  //Nuevo array eliminando 1, pasando el indice ya restado para que se elimine a si mismo
  DATA.splice(index, 1);
  res.json(DATA); //nueva DATA
};
