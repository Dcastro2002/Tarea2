function aprobarPrestamo(tipoPersona, tieneDeudas) {
    if (tipoPersona === 'estudiante') {
        return false; // No se aprueba el préstamo para estudiantes
    } else if (tipoPersona === 'empleado') {
        return true; // Se aprueba el préstamo para empleados
    } else if (tipoPersona === 'retirado') {
        return !tieneDeudas; // Se aprueba solo si el retirado no tiene deudas
    } else {
        throw new Error('Tipo de persona no reconocido'); // Error si el tipo de persona no es válido
    }
}

module.exports = aprobarPrestamo; // Exporta la función para que pueda usarse en otros archivos
