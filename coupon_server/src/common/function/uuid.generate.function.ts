import { v4 as uuidv4 } from 'uuid';

export default function uuidGenerator(): string {
  return uuidv4();
}
