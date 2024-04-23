import mongoose, {Document} from "mongoose";

interface Move extends Document {
    name: string;
    description: string;
    playbook: string;
}

const moveSchema = new mongoose.Schema<Move>({
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

export default mongoose.model<Move>('Move', moveSchema);