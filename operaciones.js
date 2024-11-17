const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito:', nuevaCita);
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    console.log('Citas registradas:', citas);
};

module.exports = { registrar, leer };
