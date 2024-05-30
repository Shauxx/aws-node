import express from 'express';
import User from '../db/models/factura.js';

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
            return res.status(404).json({ error: 'Factura no encontrado.' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { monto, fecha, fechapago, alumbrado, Idcliente, Idlectura } = req.body;

    try {

        const newarea = await User.create({ monto, fecha, fechapago, alumbrado, Idcliente, Idlectura });

        res.status(201).json(newarea);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    const Id = req.params.id;
    const { monto, fecha, fechapago, alumbrado, Idcliente, Idlectura } = req.body;

    try {
        const existing = await User.findByPk(Id);

        if (!existing) {
            return res.status(404).json({ error: 'dpi no encontrado.' });
        }

        await existing.update({ monto, fecha, fechapago, alumbrado, Idcliente, Idlectura });

        res.json(existing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
