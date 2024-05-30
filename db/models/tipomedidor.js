import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const TipoMedidior = sequelize.define('TipoMedidior', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipomedidor: {
        type: DataTypes.STRING,
    }
});


TipoMedidior.sync()
    .then(() => {
        return TipoMedidior.count();
    })
    .then((count) => {
        if (count === 0) {
            return TipoMedidior.bulkCreate([
                { tipomedidor: 'industrial' },
                { tipomedidor: 'generico' },
            ]);
        }
    })
    .then(() => {
        console.log('Datos por defecto añadidos correctamente a la tabla de tipomedidor.');
    })
    .catch((error) => {
        console.error('Error al sincronizar y/o añadir datos por defecto:', error);
    });

export default TipoMedidior;