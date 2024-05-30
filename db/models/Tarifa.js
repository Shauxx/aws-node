import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const TipoTarifa = sequelize.define('TipoTarifa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipotarifa: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.FLOAT,
    }
});


TipoTarifa.sync()
    .then(() => {
        return TipoTarifa.count();
    })
    .then((count) => {
        if (count === 0) {
            return TipoTarifa.bulkCreate([
                { tipotarifa: 'Residencial', precio: 2.5 },
                { tipotarifa: 'Industria', precio: 5.87 },
                { tipotarifa: 'Residencia tipo A', precio: 3.84 },
            ]);
        }
    })
    .then(() => {
        console.log('Datos por defecto añadidos correctamente a la tabla de tipotarifa.');
    })
    .catch((error) => {
        console.error('Error al sincronizar y/o añadir datos por defecto:', error);
    });

export default TipoTarifa;