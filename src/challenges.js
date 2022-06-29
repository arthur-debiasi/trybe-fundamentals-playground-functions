// Desafio 1
function compareTrue(firstValue, secondValue) {
  let resultado1 = false;
  if (firstValue === true && secondValue === true) {
    resultado1 = true;
  }
  return resultado1;
}

// Desafio 2
function calcArea(base, height) {
  let resultado2 = (base * height) / 2;
  return resultado2;
}

// Desafio 3
function splitSentence(string) {
  let resultado3 = string.split(' ');
  return resultado3;
}

// Desafio 4
function concatName(array) {
  let resultado4 = '';
  resultado4 = `${array[array.length - 1]}, ${array[0]}`;
  return resultado4;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = wins * 3 + ties * 1;
  return points;
}

// Desafio 6

function highestNumber(array) {
  let highest = array[0];
  for (let index1 = 1; index1 < array.length; index1 += 1) {
    if (array[index1] >= highest) {
      highest = array[index1];
    }
  }
  return highest;
}

function highestCount(array) {
  let countNumber = highestNumber(array);
  let numberCount = 0;
  for (let index2 = 0; index2 < array.length; index2 += 1) {
    if (array[index2] === countNumber) {
      numberCount += 1;
    }
  }
  return numberCount;
}

// Desafio 7
function distanceCat1(mouse, cat1) {
  let dist1 = 0;
  if (mouse >= cat1) {
    dist1 = mouse - cat1;
  } else {
    dist1 = cat1 - mouse;
  }
  return dist1;
}
function distanceCat2(mouse, cat2) {
  let dist2 = 0;
  if (mouse >= cat2) {
    dist2 = mouse - cat2;
  } else {
    dist2 = cat2 - mouse;
  }
  return dist2;
}
function catAndMouse(mouse, cat1, cat2) {
  let resultado7 = '';
  if (distanceCat1(mouse, cat1) === distanceCat2(mouse, cat2)) {
    resultado7 = 'os gatos trombam e o rato foge';
  } else if (distanceCat1(mouse, cat1) > distanceCat2(mouse, cat2)) {
    resultado7 = 'cat2';
  } else {
    resultado7 = 'cat1';
  }
  return resultado7;
}

// Desafio 8
function fizzBuzz(numArray) {
  let message = [];
  for (let index = 0; index < numArray.length; index += 1) {
    switch (true) {
    case numArray[index] % 3 === 0 && numArray[index] % 5 === 0:
      message.push('fizzBuzz');
      break;
    case numArray[index] % 3 === 0:
      message.push('fizz');
      break;
    case numArray[index] % 5 === 0:
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
function techList() {
  // seu código aqui
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
