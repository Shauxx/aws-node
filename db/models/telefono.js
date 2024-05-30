import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';

const Telefono = sequelize.define('Telefono', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numero: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

export default Telefono;