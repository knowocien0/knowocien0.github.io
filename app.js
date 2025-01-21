
let liczba = Math.floor(Math.random() * 100) + 1; 
let próby = 10; // Liczba prób

function sprawdz() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.innerHTML = "Proszę wprowadzić liczbę z zakresu 1-100!";
        return;
    }

    próby--; // Zmniejszamy liczbę prób

    if (userGuess === liczba) {
        resultElement.innerHTML = `Gratulacje! Zgadłeś liczbę ${liczba}! Wygrałeś!`;
        attemptsElement.innerHTML = ""; 
        return;
    } else if (userGuess < liczba) {
        resultElement.innerHTML = "Twoja liczba jest za mała. Spróbuj większą.";
    } else {
        resultElement.innerHTML = "Twoja liczba jest za duża. Spróbuj mniejszą.";
    }

    if (próby > 0) {
        attemptsElement.innerHTML = `Pozostałe próby: ${próby}`;
    } else {
        resultElement.innerHTML = `Niestety, przegrałeś! Prawidłowa liczba to ${liczba}.`;
        attemptsElement.innerHTML = ""; 
    }
}
