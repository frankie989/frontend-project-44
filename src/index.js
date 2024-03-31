import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGameEngine = (gameDescription, getQuestionResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n', {
    defaultInput: 'John Doe',
  });
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;