import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeNumber = (upperLimit) => {
  let primeNumber = 2;
  for (let i = upperLimit; ; i -= 1) {
    if (isPrimeNumber(i)) {
      primeNumber = i;
      return primeNumber;
    }
  }
};

const getGameData = () => {
  const randomPrimeNumber = generatePrimeNumber(getRandomNum(settings.minNum, settings.maxNum));
  const randomNumber = getRandomNum(settings.minNum, settings.maxNum);
  const numbers = [randomPrimeNumber, randomNumber];
  const question = numbers[getRandomNum(0, numbers.length - 1)];
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runBrainPrime = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainPrime;