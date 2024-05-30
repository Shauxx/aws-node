import express from 'express';
import User from '../db/models/lecturas.js';

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
            return res.status(404).json({ error: 'Lectura no encontrado.' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { calculo, lectura_actual, lectura_anterior, fecha, Idmedidor } = req.body;

    try {
        const newarea = await User.create({ calculo, lectura_actual, lectura_anterior, fecha, Idmedidor });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { calculo, lectura_actual, lectura_anterior, fecha, Idmedidor } = req.body;

    try {
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'dpi no encontrado.' });
        }

        await existing.update({ calculo, lectura_actual, lectura_anterior, fecha, Idmedidor });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
