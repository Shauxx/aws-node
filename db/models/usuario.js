import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Rol from './rol.js'

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuario: {
        type: DataTypes.STRING,
    },
    contra: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

Usuario.belongsTo(Rol, { foreignKey: 'Idrol', as: 'Rol' });

export default Usuario;