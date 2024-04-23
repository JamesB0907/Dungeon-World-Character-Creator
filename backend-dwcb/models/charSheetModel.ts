import mongoose, { Document } from 'mongoose';

interface Look {
  body: string;
  eyes: string;
  hair: string;
  clothes: string;
}

interface Stats {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

interface CharSheet extends Document {
  name: string;
  look: Look;
  stats: Stats;
  alignment: string;
  bonds: string[];
  level: number;
  xp: number;
  hp: number;
  armor: number;
  playbook: string;
}

const charSheetSchema = new mongoose.Schema<CharSheet>({
  name: {
    type: String,
    required: true
  },
  look: {
    type: {
      body: {
        type: String,
        required: true
      },
      eyes: {
        type: String,
        required: true
      },
      hair: {
        type: String,
        required: true
      },
      clothes: {
        type: String,
        required: true
      }
    },
    required: true
  },
  stats: {
    type: {
      str: {
        type: Number,
        required: true
      },
      dex: {
        type: Number,
        required: true
      },
      con: {
        type: Number,
        required: true
      },
      int: {
        type: Number,
        required: true
      },
      wis: {
        type: Number,
        required: true
      },
      cha: {
        type: Number,
        required: true
      }
    },
    required: true
  },
  alignment: {
    type: String,
    required: true
  },
  bonds: {
    type: [String],
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  xp: {
    type: Number,
    required: true
  },
  hp: {
    type: Number,
    required: true
  },
  armor: {
    type: Number,
    required: true
  },
  playbook: {
    type: String,
    enum: ['The Bard', 'The Cleric', 'The Druid', 'The Fighter', 'The Immolator', 'The Paladin', 'The Ranger', 'The Thief', 'The Wizard'],
    required: true
  },
});

export default mongoose.model<CharSheet>('CharSheet', charSheetSchema);