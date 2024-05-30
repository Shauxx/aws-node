import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Telefono from './telefono.js'
import Usuario from './usuario.js'

const Empleado = sequelize.define('Empleado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    correo: {
        type: DataTypes.STRING,
    },
    dpi: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

Empleado.belongsTo(Telefono, { foreignKey: 'Idtelefono', as: 'telefono' });
Empleado.belongsTo(Usuario, { foreignKey: 'Idusuario', as: 'Usuario' });

export default Empleado;