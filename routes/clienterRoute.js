import express from 'express';
import User from '../db/models/cliente.js';

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
            return res.status(404).json({ error: 'Cliente no encontrado.' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { nombre, correo, direccion, dpi, kmposte, Idmunicipio, Idtelefono, Idmedidor, Idusuario } = req.body;

    try {
        const existing = await User.findOne({ where: { dpi } });

        if (existing) {
            return res.status(400).json({ error: 'El cliente ya existe.' });
        }

        const newarea = await User.create({ nombre, correo, direccion, dpi, kmposte, Idmunicipio, Idtelefono, Idmedidor, Idusuario });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { nombre, correo, direccion, dpi, kmposte, Idmunicipio, Idtelefono, Idmedidor, Idusuario } = req.body;

    try {
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'dpi no encontrado.' });
        }

        await existing.update({ nombre, correo, direccion, dpi, kmposte, Idmunicipio, Idtelefono, Idmedidor, Idusuario });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
