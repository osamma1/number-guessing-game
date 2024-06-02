// src/game.ts
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;

const askQuestion = (query: string): Promise<string> => {
  return new Promise(resolve => rl.question(query, resolve));
};

const playGame = async () => {
  const maxNumber = 10;
  const numberToGuess = generateRandomNumber(maxNumber);
  let attempts = 0;
  let guessedCorrectly = false;

  console.log(`Guess a number between 1 and ${maxNumber}`);

  while (!guessedCorrectly) {
    const answer = await askQuestion('Your guess: ');
    const guess = parseInt(answer, 10);
    attempts++;

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
    } else if (guess < numberToGuess) {
      console.log('Too low!');
    } else if (guess > numberToGuess) {
      console.log('Too high!');
    } else {
      console.log(`Correct! The number was ${numberToGuess}.`);
      console.log(`You guessed it in ${attempts} attempts.`);
      guessedCorrectly = true;
    }
  }

  rl.close();
};

playGame();
