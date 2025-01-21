// Losowanie liczby od 1 do 100
let liczba = Math.floor(Math.random() * 100) + 1;
let próby = 10;  // Liczba prób gracza

// Funkcja do sprawdzenia wprowadzonej liczby
function sprawdz() {
    // Pobranie liczby od użytkownika
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    
    // Sprawdzenie, czy użytkownik wprowadził poprawną liczbę
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultElement.innerHTML = "Proszę wprowadzić liczbę z zakresu 1-100!";
        return;
    }

    // Zmniejszanie liczby prób
    próby--;

    // Sprawdzenie, czy gracz zgadł liczbę
    if (userGuess === liczba) {
        resultElement.innerHTML = `Gratulacje! Zgadłeś liczbę ${liczba}! Wygrałeś!`;
        attemptsElement.innerHTML = ""; // Ukrycie liczby prób po wygranej
        return;
    } else if (userGuess < liczba) {
        resultElement.innerHTML = "Twoja liczba jest za mała. Spróbuj większą.";
    } else {
        resultElement.innerHTML = "Twoja liczba jest za duża. Spróbuj mniejszą.";
    }

    // Sprawdzanie liczby prób
    if (próby > 0) {
        attemptsElement.innerHTML = `Pozostałe próby: ${próby}`;
    } else {
        resultElement.innerHTML = `Niestety, przegrałeś! Prawidłowa liczba to ${liczba}.`;
        attemptsElement.innerHTML = ""; // Ukrycie liczby prób po przegranej
    }
}
