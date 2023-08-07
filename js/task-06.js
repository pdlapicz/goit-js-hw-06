const input = document.getElementById('validation-input');

function checkInputLength() {
  const inputLength = this.value.length;
  const requiredLength = this.getAttribute('data-length');

  if (inputLength == requiredLength) {
    //   wymagane jest ==, poniewaz porywnywane jest 6 z '6', chyba, żeby przekonwertować requiredLength
    this.classList.add('valid');
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
    this.classList.remove('valid');
  }
}

input.addEventListener('blur', checkInputLength);

// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.
