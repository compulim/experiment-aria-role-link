import random from 'math-random';

export default function uniqueId(prefix = '', length = 5) {
  return random().toString(36).substr(2, length);
}
