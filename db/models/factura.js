import { DataTypes } from 'sequelize';
import { sequelize } from '../index.js';
import Cliente from './cliente.js'
import Lectura from './lecturas.js'

const Factura = sequelize.define('Factura', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    monto: {
        type: DataTypes.FLOAT,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    fechapago: {
        type: DataTypes.DATE,
    },
    alumbrado: {
        type: DataTypes.FLOAT,
        defaultValue: 12.50,
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
}, {
    hooks: {
        beforeSave: (factura) => {
            if (factura.fecha) {
                const fechaPago = new Date(factura.fecha);
                fechaPago.setMonth(fechaPago.getMonth() + 1);
                factura.fechapago = fechaPago;
            }
        }
    }
});

Factura.belongsTo(Cliente, { foreignKey: 'Idcliente', as: 'cliente' });
Factura.belongsTo(Lectura, { foreignKey: 'Idlectura', as: 'lectura' });

export default Factura;