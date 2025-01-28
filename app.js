let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

console.log("Witaj w grze! Musisz odgadnąć liczbę od 1 do 100.");
console.log("Masz 10 prób.");

function guessNumber() {
    let userGuess = prompt("Wprowadź liczbę (1-100):");

    if (userGuess === null) {
        alert("Przerwałeś grę.");
        return;
    }
    
    userGuess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Proszę podać liczbę z zakresu 1-100.");
        guessNumber(); 
        return;
    }

    attempts--;

    if (userGuess === secretNumber) {
        alert("Gratulacje! Zgadłeś liczbę!");
    } else if (userGuess < secretNumber) {
        alert("Twoja liczba jest za mała. Masz " + attempts + " prób.");
    } else if (userGuess > secretNumber) {
        alert("Twoja liczba jest za duża. Masz " + attempts + " prób.");
    }

    if (attempts === 0 && userGuess !== secretNumber) {
        alert("Niestety, przegrałeś! Prawidłowa liczba to: " + secretNumber);
    } else if (userGuess !== secretNumber) {
        guessNumber(); // Kolejna próba
    }
}

// Rozpoczęcie gry
guessNumber();
