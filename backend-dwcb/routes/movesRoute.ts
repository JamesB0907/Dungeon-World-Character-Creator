import express, { Request, Response } from 'express';
import Move from '../models/movesModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const moves = await Move.find();
        res.json(moves);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});
