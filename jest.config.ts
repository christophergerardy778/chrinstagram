import { config } from 'dotenv';

config();

export default {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
