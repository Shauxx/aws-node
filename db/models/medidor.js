import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Tipomedidor from './tipomedidor.js'
import Tarifa from './Tarifa.js'

const Medidor = sequelize.define('Medidor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    observaciones: {
        type: DataTypes.STRING,
    },
    ubicacion: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

Medidor.belongsTo(Tipomedidor, { foreignKey: 'Idtipomedidor', as: 'tipomedidor' });
Medidor.belongsTo(Tarifa, { foreignKey: 'Idtarifa', as: 'tarifa' });

export default Medidor;