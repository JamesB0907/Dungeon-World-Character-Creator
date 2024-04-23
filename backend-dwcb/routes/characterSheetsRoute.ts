import express, { Request, Response } from 'express';
import CharSheet from '../models/charSheetModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const charSheets = await CharSheet.find();
        res.json(charSheets);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const {
            name,
            look,
            stats,
            alignment,
            bonds,
            level,
            xp,
            hp,
            armor,
            playbook
        } = req.body;

        const newCharSheet = new CharSheet({
            name,
            look,
            stats,
            alignment,
            bonds,
            level,
            xp,
            hp,
            armor,
            playbook
        });

        await newCharSheet.save();

        res.status(201).json(newCharSheet);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
