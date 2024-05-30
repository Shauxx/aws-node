import express from 'express';
import User from '../db/models/empleado.js';

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
            return res.status(404).json({ error: 'Empleado no encontrado.' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { nombre, correo, dpi, Idtelefono, Idusuario } = req.body;

    try {
        const existing = await User.findOne({ where: { dpi } });

        if (existing) {
            return res.status(400).json({ error: 'El numero ya existe.' });
        }

        const newarea = await User.create({ nombre, correo, dpi, Idtelefono, Idusuario });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { nombre, correo, dpi, Idtelefono, Idusuario } = req.body;

    try {
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'dpi no encontrado.' });
        }

        await existing.update({ nombre, correo, dpi, Idtelefono, Idusuario });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
