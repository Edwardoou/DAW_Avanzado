import request from "supertest";
import { app } from "../src/app";

//GET
describe("Lista de Usuarios", () => {
  test("METHOD GET", async () => {
    const result = await request(app).get("/user");

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// POST
describe("Creacion de usuario", () => {
  test("METHOD POST", async () => {
    const body = {
      name: "Melany",
      lastname: "Cubas",
      email: "melanytest@gmail.com",
      password: "melany123",
    };

    const result = await request(app).post("/user/sign-up").send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

