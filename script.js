// En este ejercicio tenéis que sustituir TODAS las funciones tradicionales por funciones flecha y que siga funcionando igual.

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

let getLetters = () => "0123456789ABCDEF";

let getRandomColor = () => {
  const letters = getLetters();
  color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

changeBackgroundButton.addEventListener(
  "click",
  () => (changeBackgroundButton.style.backgroundColor = getRandomColor())
);
