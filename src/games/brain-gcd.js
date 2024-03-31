import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (Math.min(num1, num2) === 0) {
    return Math.max(num1, num2);
  }
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getGameData = () => {
  const num1 = getRandomNum(settings.minNum, settings.maxNum);
  const num2 = getRandomNum(settings.minNum, settings.maxNum);
  const correctAnswer = getGcd(num1, num2).toString();
  const question = `${num1} ${num2}`;
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainGcd;