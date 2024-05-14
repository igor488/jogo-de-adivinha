const secretNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const message = document.getElementById('message');
    let attempts = 0;

    function checkGuess() {
      const userGuess = parseInt(guessInput.value);
      
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage('Por favor, digite um número válido entre 1 e 100.', 'red');
        return;
      }

      attempts++;

      if (userGuess === secretNumber) {
        showMessage(`Parabéns! Você acertou o número em ${attempts} tentativa(s).`, 'green');
        guessInput.disabled = true;
        guessButton.disabled = true;
      } else if (userGuess < secretNumber) {
        showMessage('Tente um número maior.', 'red');
      } else {
        showMessage('Tente um número menor.', 'red');
      }

      guessInput.value = '';
      guessInput.focus();
    }

    function showMessage(text, color) {
      message.textContent = text;
      message.style.color = color;
    }

    guessButton.addEventListener('click', checkGuess);