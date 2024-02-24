import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Product List.'});
});

router.post('/', (req, res) => {
    res.json({message: 'Product Registrado'});
})

export default router;