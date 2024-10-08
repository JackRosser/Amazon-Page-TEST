console.log("start 13:00");

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  // scorro l'array
  console.log(pets[i]); // stampo ogni elemento
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let order = function (array) {
  return array.sort();
};

// order(pets);
console.log(`Ecco l'array in ordine alfabetico: ${order(pets)}`);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let reverse = function (array) {
  return array.reverse(); // reverse(pets);
};

console.log(`Ecco l'array in ordine invertito: ${reverse(pets)}`);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let change = function (array) {
  for (let i = 0; i < array.length; i++) {}
  array.push(array[0]);
  array.splice(0, 1);
  return array;
};
console.log(change(pets), "prova");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"]
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"]
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"]
  }
];

for (let i = 0; i < cars.length; i++) {
  cars[i].LicensePlate = 12345;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let kia = {
  brand: "Kia",
  model: "Picanto",
  color: "red",
  trims: ["ambara", "ba", "cicci"]
};

let addlicense = function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].LicensePlate = 12345;
  }
};

let destroy = function () {
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
  }
};

cars.push(kia);
addlicense();
destroy();
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

let saveFirstTrims = function () {
  for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims[0]);
  }
};

saveFirstTrims();

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let view = cars[i].color.split("");
  if (view[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let result = 0;

while (numericArray[result] !== 32) {
  //gli dico di scorrere finché la condizione !== 32 diventa falsa, ossia quando non trova più un numero diverso da 32
  result++;
  console.log(numericArray[result]);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

let positions = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      positions.push(1);
      break;

    case "b":
      positions.push(2);
      break;

    case "c":
      positions.push(3);
      break;

    case "d":
      positions.push(4);
      break;

    case "e":
      positions.push(5);
      break;

    case "f":
      positions.push(6);
      break;

    case "g":
      positions.push(7);
      break;

    case "h":
      positions.push(8);
      break;

    case "i":
      positions.push(9);
      break;

    case "j":
      positions.push(10);
      break;

    case "k":
      positions.push(11);
      break;

    case "l":
      positions.push(12);
      break;

    case "m":
      positions.push(13);
      break;

    case "n":
      positions.push(14);
      break;

    case "o":
      positions.push(15);
      break;

    case "p":
      positions.push(16);
      break;

    case "q":
      positions.push(17);
      break;

    case "r":
      positions.push(18);
      break;

    case "s":
      positions.push(19);
      break;

    case "t":
      positions.push(20);
      break;

    case "u":
      positions.push(21);
      break;

    case "v":
      positions.push(22);
      break;

    case "w":
      positions.push(23);
      break;

    case "x":
      positions.push(24);
      break;

    case "y":
      positions.push(25);
      break;

    case "z":
      positions.push(26);
      break;

    default:
      console.log("Carattere non trovato");
  }
}

console.log(positions);
