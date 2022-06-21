let color = document.getElementById("color-picker").value;
document.body.style.backgroundColor = color;
document.getElementById("cor").style.color = color;

function verifica_valor(element) {
  if (color != element.value) {
    document.body.style.backgroundColor = element.value;
    document.getElementById("cor").style.color = element.value;
    console.log(color);
    color = element.value;
  }
}
