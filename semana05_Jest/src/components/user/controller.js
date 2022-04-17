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

//*GET ALL USERS
export const getIndex = (req, res) => {
  // cuando vamos a construir un API las respuestas
  // que enviemos deben ser en formato JSON
  // res tiene la opcion de poder enviar respuestas en formato JSON
  res.status(200).json({
    ok: true,
    DATA,
  });
};

//login simple
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

//*CREATE USER
export const createUser = (req, res) => {
  req.body.id = DATA.length + 1;
  const user = req.body;

  const validateUser = DATA.find(
    (u) => u.name === user.name || u.email === user.email
  );

  if (validateUser) {
    return res.status(200).json({
      ok: false,
      data: "User already exits",
    });
  }

  DATA.push(user);

  return res.status(201).json({
    ok: true,
    data: user,
  });
};

//*GET USER BY ID
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

//No se si esta bien
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

//*UPDATE USER
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, password } = req.body;

  const user = DATA.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(200).json({
      ok: false,
      data: "User not found",
    });
  }

  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.password = password;

  return res.status(200).json({
    ok: true,
    data: user,
  });
};

//*DELETE USER
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const user = DATA.find((u) => u.id === Number(id));

  if (!user) {
    return res.status(200).json({
      ok: false,
      data: "User not found",
    });
  }

  DATA.splice(DATA.indexOf(user), 1);

  return res.status(200).json({
    ok: true,
    data: "User deleted",
  });
};
