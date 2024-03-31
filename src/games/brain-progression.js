import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
  lengthOfProgression: 10,
};
const gameDescription = 'What number is missing in the progression?';
const getProgression = (startNumber, stepNumber, length) => {
  const progression = [];
  let number = startNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(number);
    number += stepNumber;
  }
  return progression;
};

const getGameData = () => {
  const startNumber = getRandomNum(settings.minNum, settings.maxNum);
  const stepNumber = getRandomNum(settings.minNum, settings.maxNum);
  const progression = getProgression(
    startNumber,
    stepNumber,
    settings.lengthOfProgression,
  );
  const secretNumberIndex = getRandomNum(0, settings.lengthOfProgression - 1);
  const copiedProgression = progression.slice();
  copiedProgression[secretNumberIndex] = '..';
  const question = copiedProgression.join(' ');
  const correctAnswer = progression[secretNumberIndex].toString();
  return [question, correctAnswer];
};

const runBrainProgression = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainProgression;