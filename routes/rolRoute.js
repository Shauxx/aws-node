// routes/userRoutes.js
import express from 'express';
import User from '../db/models/rol.js';

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
    const { area } = req.body;

    try {
        const existing = await User.findOne({ where: { area } });

        if (existing) {
            return res.status(400).json({ error: 'El area ya existe.' });
        }

        const newarea = await User.create({ area });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { area } = req.body;

    try {
        // Verificar si el usuario existe
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'area no encontrado.' });
        }

        // Actualizar el usuario y la contraseña
        await existing.update({ area });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
