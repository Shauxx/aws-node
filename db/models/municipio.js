import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Depto from './depto.js'

const Municipio = sequelize.define('Municipio', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    municipio: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});


Municipio.belongsTo(Depto, { foreignKey: 'Iddepto', as: 'depto' });

Municipio.sync()
    .then(() => {
        return Municipio.count();
    })
    .then((count) => {
        if (count === 0) {
            return Municipio.bulkCreate([
                { municipio: 'Guatemala', Iddepto: 1 },
            ]);
        }
    })
    .then(() => {
        console.log('Datos por defecto añadidos correctamente a la tabla de áreas.');
    })
    .catch((error) => {
        console.error('Error al sincronizar y/o añadir datos por defecto:', error);
    });

export default Municipio;