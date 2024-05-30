import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Municipio from './municipio.js'
import Telefono from './telefono.js'
import Usuario from './usuario.js'
import Medidor from './medidor.js'

const Cliente = sequelize.define('Cliente', {
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
    direccion: {
        type: DataTypes.STRING,
    },
    dpi: {
        type: DataTypes.STRING,
    },
    kmposte: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },

});

Cliente.belongsTo(Municipio, { foreignKey: 'Idmunicipio', as: 'municipio' });
Cliente.belongsTo(Telefono, { foreignKey: 'Idtelefono', as: 'telefono' });
Cliente.belongsTo(Usuario, { foreignKey: 'Idusuario', as: 'usuario' });
Cliente.belongsTo(Medidor, { foreignKey: 'Idmedidor', as: 'medidor' });

export default Cliente;