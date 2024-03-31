// src/cli.js
import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n', {
    defaultInput: 'John Doe',
  });
  console.log(`Hello, ${name}!`);
};

export default greet;