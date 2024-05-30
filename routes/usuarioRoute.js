import express from 'express';
import User from '../db/models/usuario.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await User.findAll();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const Id = req.params.id;

    try {
        const data = await User.findByPk(Id);

        if (!data) {
            return res.status(404).json({ error: 'Cargo no encontrado.' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { usuario, contra, Idrol } = req.body;

    try {
        const existing = await User.findOne({ where: { usuario } });

        if (existing) {
            return res.status(400).json({ error: 'El usuario ya existe.' });
        }

        const newarea = await User.create({ usuario, contra, Idrol });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { usuario, contra } = req.body;

    try {
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'usuario no encontrado.' });
        }

        await existing.update({ usuario, contra });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Ruta para login
router.post('/login', async (req, res) => {
    const { usuario, contra } = req.body;

    try {
        const user = await User.findOne({ where: { usuario } });

        if (!user || user.contra !== contra) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }

        // Aquí puedes generar y devolver un token JWT, pero para este ejemplo solo devolvemos un mensaje
        res.json({ message: 'Login exitoso', userId: user.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



export default router;
