let botao = document.getElementsByClassName("mybutton")[0];
botao.onclick = function (e) {
  let idade = Number(document.getElementById("idade").value);
  if (idade >= 18 && idade <= 110) {
    alert("Você é de maior");
    console.log(idade);
  } else if (idade < 18 && idade > 0) {
    alert("Você é de menor");
    console.log(idade);
  } else {
    alert("Idade invalida");
    console.log(idade);
  }
  e.preventDefault();
};
