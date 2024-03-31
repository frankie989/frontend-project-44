import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';
const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getGameData = () => {
  const num1 = getRandomNum(settings.minNum, settings.maxNum);
  const num2 = getRandomNum(settings.minNum, settings.maxNum);
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calcNums(num1, num2, operator).toString();
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainCalc;