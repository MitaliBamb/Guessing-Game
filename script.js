const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  attemptsText.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.style.display = 'inline-block';
  resetBtn.style.display = 'none';
}

function checkGuess() {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  attempts++;
  if (guess === secretNumber) {
    message.textContent = `Congrats! You guessed the number in ${attempts} attempt${attempts > 1 ? 's' : ''}! 🎉`;
    guessInput.disabled = true;
    guessBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

resetBtn.addEventListener('click', resetGame);
