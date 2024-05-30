import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const Depto = sequelize.define('Depto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    depto: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

Depto.sync()
    .then(() => {
        return Depto.count();
    })
    .then((count) => {
        if (count === 0) {
            return Depto.bulkCreate([
                { depto: 'Guatemala' },
                { depto: 'El Progreso' },
                { depto: 'Sacatepéquez' },
                { depto: 'Chimaltenango' },
                { depto: 'Escuintla' },
                { depto: 'Santa Rosa' },
                { depto: 'Sololá' },
                { depto: 'Totonicapán' },
                { depto: 'Quetzaltenango' },
                { depto: 'Suchitepéquez' },
                { depto: 'Retalhuleu' },
                { depto: 'San Marcos' },
                { depto: 'Huehuetenango' },
                { depto: 'Quiché' },
                { depto: 'Baja Verapaz' },
                { depto: 'Alta Verapaz' },
                { depto: 'Petén' },
                { depto: 'Izabal' },
                { depto: 'Zacapa' },
                { depto: 'Chiquimula' },
                { depto: 'Jalapa' },
                { depto: 'Jutiapa' }
            ]);
        }
    })
    .then(() => {
        console.log('Datos por defecto añadidos correctamente a la tabla de áreas.');
    })
    .catch((error) => {
        console.error('Error al sincronizar y/o añadir datos por defecto:', error);
    });


export default Depto;