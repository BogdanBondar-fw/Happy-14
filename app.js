function moveButton() {
  const button = document.querySelector(".movable-button");

  const buttonWidth = button.clientWidth;
  const buttonHeight = button.clientHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
}

function changeContent() {
  // Получаем элементы по их идентификаторам
  let image = document.getElementById("myImage");
  let text = document.getElementById("myText");

  // Изменяем атрибуты картинки и текст
  if (image.src.endsWith("peach-emm.gif")) {
    image.src = "cute.gif";
    text.innerHTML = "Eeeeeeee";
  } else {
    image.src = "peach-emm.gif";
    text.innerHTML = "Will you be my Valentine?";
  }
}
