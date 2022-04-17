import { multiplicar, sumar, restar, dividir } from "../helper/operations";

test("Suma", () => {
  expect(sumar(1, 3)).toBe(4);
});

test("Resta", () => {
  expect(restar(4, 2)).toBe(2);
});

test("Multiplicacion", () => {
  expect(multiplicar(2, 4)).toBe(8);
});

test("Division", () => {
  expect(dividir(6, 2)).toBe(3);
});
