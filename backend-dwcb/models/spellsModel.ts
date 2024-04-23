import mongoose, {Document} from "mongoose";

interface Spell extends Document {
    name: string;
    description: string;
    playbook: string;
}

const spellSchema = new mongoose.Schema<Spell>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    playbook: {
        type: String,
        required: true
    }
});