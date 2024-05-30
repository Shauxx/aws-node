import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Medidor from './medidor.js'

const Lectura = sequelize.define('Lectura', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    calculo: {
        type: DataTypes.FLOAT,
    },
    lectura_actual: {
        type: DataTypes.FLOAT,
    },
    lectura_anterior: {
        type: DataTypes.FLOAT,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
}, {
    hooks: {
        beforeSave: (lectura) => {
            if (lectura.lectura_actual !== undefined && lectura.lectura_anterior !== undefined) {
                lectura.calculo = lectura.lectura_actual - lectura.lectura_anterior;
            }
        }
    }
});

Lectura.belongsTo(Medidor, { foreignKey: 'Idmedidor', as: 'medidor' });

export default Lectura;