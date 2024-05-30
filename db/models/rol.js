// db/models/area.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rol: {
        type: DataTypes.STRING,
    }
});


Rol.sync()
    .then(() => {
        return Rol.count();
    })
    .then((count) => {
        if (count === 0) {
            return Rol.bulkCreate([
                { rol: 'admin' },
                { rol: 'cliente' },
                { rol: 'secretaria' },
                { rol: 'trabajador' },
            ]);
        }
    })
    .then(() => {
        console.log('Datos por defecto añadidos correctamente a la tabla de áreas.');
    })
    .catch((error) => {
        console.error('Error al sincronizar y/o añadir datos por defecto:', error);
    });

export default Rol;