import {somar} from "../src/calculadora"

describe("Calculadora", () => {
  test("Deve somar dois numeros corretamente", () => {
   ///AAA
   //Arrange (preparar)
   const a = 2;
   const b = 3;

   //act (executar)

   const resultado = somar(a, b);

   //Assert (verificar)

   expect(resultado).toBe(5);

  });
});