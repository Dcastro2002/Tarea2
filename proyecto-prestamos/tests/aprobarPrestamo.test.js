const aprobarPrestamo = require('../src/aprobarPrestamo'); // Importa la función para probarla

test('Préstamo no aprobado para estudiante', () => {
    expect(aprobarPrestamo('estudiante', false)).toBe(false);
    expect(aprobarPrestamo('estudiante', true)).toBe(false);
});

test('Préstamo aprobado para empleado', () => {
    expect(aprobarPrestamo('empleado', false)).toBe(true);
    expect(aprobarPrestamo('empleado', true)).toBe(true);
});

test('Préstamo aprobado para retirado sin deudas', () => {
    expect(aprobarPrestamo('retirado', false)).toBe(true);
});

test('Préstamo no aprobado para retirado con deudas', () => {
    expect(aprobarPrestamo('retirado', true)).toBe(false);
});

test('Lanzar error para tipo de persona no reconocido', () => {
    expect(() => aprobarPrestamo('desconocido', false)).toThrow('Tipo de persona no reconocido');
});
