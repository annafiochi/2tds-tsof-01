import {multiplicar, somar, subtrair, dividir} from "../src/calculadora"

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


  
 test("Deve subtrair dois numeros corretamente", () => {
   ///AAA
   //Arrange (preparar)
   const a = 13;
   const b = 3;

   //act (executar)

   const resultado = subtrair(a, b);

   //Assert (verificar)

   expect(resultado).toBe(10);

  });

   test("Deve multiplicar dois numeros corretamente", () => {
   ///AAA
   //Arrange (preparar)
   const a = 5;
   const b = 2;

   //act (executar)

   const resultado = multiplicar(a, b);

   //Assert (verificar)

   expect(resultado).toBe(10);

  });


  test("Deve dividir dois numeros corretamente", () => {
   ///AAA
   //Arrange (preparar)
   const a = 20;
   const b = 2;

   //act (executar)

   const resultado = dividir(a, b);

   //Assert (verificar)

   expect(resultado).toBe(10);

  });

  test("Deve lançar erro ao dividir por zero", () => {
   ///AAA
   //Arrange (preparar)
   const a = 10;
   const b = 0;

   //act (executar)

   const resultado = dividir(a, b);

   //Assert (verificar)

   expect(resultado).toThrow("não é possivel dividir por zero");
     expect(() => {
        dividir(10, 5);
     }).toThrow("não é possivel dividir por zero");
  });