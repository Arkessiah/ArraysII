// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Arrays II', () => {
  it('La variable numeros debe contener números del 0 al 8', () => {
    expect(numeros).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
