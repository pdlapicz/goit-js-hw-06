const fontSizeControl = document.querySelector('#font-size-control');
// element - suwak
const text = document.querySelector('#text');
// tekst do zmiany font size
fontSizeControl.addEventListener('input', function () {
  const fontSize = fontSizeControl.value;
  text.style.transition = 'font-size 0.2s';
  text.style.fontSize = fontSize + "px";
});

const initialFontSize = getComputedStyle(text).fontSize;
fontSizeControl.value = parseInt(initialFontSize);

text.style.fontSize = initialFontSize;

// Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span
