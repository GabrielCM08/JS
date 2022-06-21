const persons = [
  {
    name: "Gabriel",
    age: 20,
    country: "Brazil",
  },
  {
    name: "2",
    age: 30,
    country: "Brazil",
  },
  {
    name: "3",
    age: 23,
    country: "Brazil",
  },
];

let botao = document.getElementsByClassName("mybutton")[0];
botao.onclick = function (e) {
  const textNode = document.createTextNode("Hello World  ");
  document.body.appendChild(textNode);
  e.preventDefault();
};

let botao2 = document.getElementsByClassName("mybutton2")[0];
botao2.onclick = function (e) {
  const textNode = document.createTextNode("Hello World 2 ");
  const node = document.createElement("li");
  node.appendChild(textNode);
  document.getElementById("myList").appendChild(node);
  e.preventDefault();
};
