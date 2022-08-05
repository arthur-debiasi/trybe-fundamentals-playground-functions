// Desafio 1
function compareTrue(firstValue, secondValue) {
  // let resultado1 = false;
  // if (firstValue === true && secondValue === true) {
  //   resultado1 = true;
  // }
  // return resultado1;
  return !!(firstValue === true && secondValue === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestNumber(array) {
  let highest = array[0];
  for (const number of array) {
    if (number >= highest) {
      highest = number;
    }
  }
  return highest;
}

function highestCount(array) {
  let numberCount = 0;
  for (const number of array) {
    if (number === highestNumber(array)) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7

function distanceCat(mouse, cat) {
  return mouse >= cat ? mouse - cat : cat - mouse;
}
function catAndMouse(mouse, cat1, cat2) {
  if (distanceCat(mouse, cat1) === distanceCat(mouse, cat2)) {
    return 'os gatos trombam e o rato foge';
  } if (distanceCat(mouse, cat1) > distanceCat(mouse, cat2)) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8

function fizzBuzzer(num) { return num % 3 === 0 && num % 5 === 0; }
function fizzer(num) { return num % 3 === 0; }
function buzzer(num) { return num % 5 === 0; }

console.log(fizzBuzzer(2));

function fizzBuzz(numArray) {
  let message = [];
  for (let index = 0; index < numArray.length; index += 1) {
    switch (true) {
    case fizzBuzzer(numArray[index]):
      message.push('fizzBuzz');
      break;
    case fizzer(numArray[index]):
      message.push('fizz');
      break;
    case buzzer(numArray[index]):
      message.push('buzz');
      break;
    default:
      message.push('bug!');
      break;
    }
  }
  return message;
}

// Desafio 9
function encodeA(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === 'a') { message += '1'; } else { message += iterator; }
  }
  return message;
}
function encodeE(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === 'e') { message += '2'; } else { message += iterator; }
  }
  return message;
}
function encodeI(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === 'i') { message += '3'; } else { message += iterator; }
  }
  return message;
}
function encodeO(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === 'o') { message += '4'; } else { message += iterator; }
  }
  return message;
}
function encodeU(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === 'u') { message += '5'; } else { message += iterator; }
  }
  return message;
}

function encode(string) {
  return encodeA(encodeE(encodeI(encodeO(encodeU(string)))));
}

function decodeA(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === '1') { message += 'a'; } else { message += iterator; }
  }
  return message;
}
function decodeE(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === '2') { message += 'e'; } else { message += iterator; }
  }
  return message;
}
function decodeI(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === '3') { message += 'i'; } else { message += iterator; }
  }
  return message;
}
function decodeO(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === '4') { message += 'o'; } else { message += iterator; }
  }
  return message;
}
function decodeU(string) {
  let message = '';
  for (let iterator of string) {
    if (iterator === '5') { message += 'u'; } else { message += iterator; }
  }
  return message;
}

function decode(string) {
  return decodeA(decodeE(decodeI(decodeO(decodeU(string)))));
}

// Desafio 10
/* Criei a função techToObject para receber uma tecnologia e um nome de pessoa
para criar um objeto com os pares chave valor correspondentes */

function techToObject(techno, person) {
  let object = {};
  object.tech = techno;
  object.name = person;
  return object;
}

/* Preciso criar uma função para ordenar o array em ordem alfabética,
vou utilizar a função criada nos exercícios bônus do bloco 4.2 (bubble sort) */

function bubbleSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] < array[j]) {
        let lower = array[i];
        array[i] = array[j];
        array[j] = lower;
      }
    }
  }
  return array;
}
/* Agora posso criar a função techList (que retorna 'Vazio!' quando a propriedade lenght do array for zero)
utilizando a função bubbleSort para ordenar a array em ordem alfabética, para então iterar a função
ntechToObject para cada elemento da array.  */

function techList(array, string) {
  if (array.length === 0) { return 'Vazio!'; }
  let resultado = [];
  let ordered = bubbleSort(array);
  for (let index = 0; index < ordered.length; index += 1) {
    resultado[index] = techToObject(ordered[index], string);
  }
  return resultado;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
