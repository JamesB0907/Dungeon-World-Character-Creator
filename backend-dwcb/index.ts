import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import characterSheetRoute from './routes/characterSheetsRoute';
import dotenv from 'dotenv';

dotenv.config();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5555;
const uri: string = process.env.MONGODB_URI || '';

const app: Express = express();

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log(req.body);
    return res.status(234).send('Welcome to Dungeon World Character Creator API!');
});

app.use('/DWCharacterSheet', characterSheetRoute);

mongoose
    .connect(uri)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen({ port }, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error('Failed to connect to MongoDB:', error);
    });