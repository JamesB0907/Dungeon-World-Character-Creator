import express, {Request, Response} from 'express';
import { PlaybookModel } from '../models/playbookModel';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const playbooks = await PlaybookModel.find();
        res.json(playbooks);
    }
    catch (error: any) {
        res.status(500).json({message: error.message});
    }
});