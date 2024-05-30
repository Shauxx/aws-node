// index.js
import express from 'express';
import cors from 'cors';
import { sequelize } from './db/index.js';
import { FRONTEND_URL } from './config/db.config.js';
import RolRoutes from './routes/rolRoute.js'
import UsuarioRoute from './routes/usuarioRoute.js'
import TelefonoRoute from './routes/telefono.js';
import EmpleadoRoute from './routes/empleadoRoute.js'
import DeptoRoute from './routes/deptoRoute.js'
import MunicipioRoute from './routes/municipio.js'
import TipoMedidior from './routes/tipomedidorRoute.js';
import TipoTarifaRoute from './routes/tarifaRoute.js';
import MedidorRoute from './routes/medidorRoute.js'
import ClienteRoute from './routes/clienterRoute.js'
import LecturaRoute from './routes/lecturaRoute.js'
import FacturaRoute from './routes/facturaRoute.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: FRONTEND_URL
}));

app.use('/rol', RolRoutes);
app.use('/usuario', UsuarioRoute);
app.use('/telefono', TelefonoRoute);
app.use('/empleado', EmpleadoRoute);
app.use('/depto', DeptoRoute);
app.use('/municipio', MunicipioRoute);
app.use('/tipomedidor', TipoMedidior);
app.use('/tipotarifa', TipoTarifaRoute);
app.use('/medidor', MedidorRoute);
app.use('/cliente', ClienteRoute);
app.use('/lectura', LecturaRoute);
app.use('/factura', FacturaRoute);

// Sincronizar con la base de datos y arrancar el servidor
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor en ejecución en puerto: ${PORT}`);
    });
});