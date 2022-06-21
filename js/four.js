const persons = [
  {
    name: "Gabriel",
    age: 20,
    country: "Brazil",
  },
  {
    name: "João",
    age: 30,
    country: "Brazil",
  },
  {
    name: "Cleber",
    age: 23,
    country: "Brazil",
  },
];

let text = "";
for (let i = 0; i < persons.length; i++) {
  text +=
    persons[i].name +
    " have " +
    persons[i].age +
    " years old and live in " +
    persons[i].country +
    "<br>";
}

persons.push({
  name: "push",
  age: 8,
  country: "Brazil",
});

console.log(persons);

console.log(persons[0].name);

const persons2 = [];
persons2[0] = "teste";
persons2[1] = "teste1";
persons2[2] = "teste2";
persons2[3] = "teste3";

window.console.log(persons2);

const persons3 = ["teste4", "teste5", "teste6", "teste7"];

window.console.log(persons3);

document.getElementById("demo").innerHTML = text;

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo2").innerHTML = myCar.name + " " + myCar.year;

window.console.log(myCar);
