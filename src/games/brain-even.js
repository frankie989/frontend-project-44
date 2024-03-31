import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numIsEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = getRandomNum(settings.minNum, settings.maxNum);
  const questionNumIsEven = numIsEven(question);
  const correctAnswer = questionNumIsEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainEven = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainEven;