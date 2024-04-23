import mongoose, { Document, Schema } from 'mongoose';

export interface Playbook extends Document {
    name: string;
    description: string;
    startingMoves: string[];
    advancedMoves: string[];
}

const PlaybookSchema = new Schema<Playbook>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingMoves: {
        type: [String],
        required: true
    },
    advancedMoves: {
        type: [String],
        required: true
    }
});

export const PlaybookModel = mongoose.model<Playbook>('Playbook', PlaybookSchema);
