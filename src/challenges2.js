// Desafio 11

// criei a função digitCounter para criar um objeto onde os nomes das propriedades são os
// dígitos contidos no array e os valores das propriedades são a contagem de repetições dos dígitos de array.

function digitCounter(array) {
  const counters = {};
  for (let index = 0; index < array.length; index += 1) {
    const digit = array[index];
    if (!counters[digit]) counters[digit] = 0;
    counters[digit] += 1;
  }
  return counters;
}

// criei a função digitLimit para verificar se há alguma propriedade em digitCounter(array) com valor >= 3.

function digitLimit(array) {
  let object = digitCounter(array);
  for (let iterator in object) {
    if (object[iterator] >= 3) {
      return true;
    }
  }
  return false;
}
// criei a função notPhoneNumbers para verificar se há algum dígito < 0 ou > 9.

function notPhoneNumbers(array) {
  for (let numbers of array) {
    if (numbers < 0 || numbers > 9 || digitLimit(array) === true) {
      return true;
    }
  }
  return false;
}
// criei a função wrongPhoneLength para verificar se a quantidade de dígitos é diferente de 11.

function wrongPhoneLength(array) {
  if (array.length === 11) {
    return false;
  }
  return true;
}
// A função generatePhoneNumber utiliza as funções auxiliares para testar as condições da array recebida.
//
// Caso wrongPhoneLength retorne true, essa função retorna a mensagem 'Array com tamanho incorreto.'.

// Caso as funções notPhoneNumbers ou digitLimit retornem true, essa função retorna a menssagem 'não é possível
// gerar um número de telefone com esses valores'.

// Caso todas as funções auxiliares retornarem false, procede para a montagem do número de telefone com base no
// formato exigido.

function generatePhoneNumber(array) {
  let resultado11;
  if (wrongPhoneLength(array) === true) {
    resultado11 = 'Array com tamanho incorreto.';
  } else if ((notPhoneNumbers(array) || digitLimit(array)) === true) {
    resultado11 = 'não é possível gerar um número de telefone com esses valores';
  } else {
    let dDD = `(${array.slice(0, 2).join('')})`;
    let firstDigits = array.slice(2, 7).join('');
    let joint = '-';
    let lastDigits = array.slice(7, 11).join('');
    resultado11 = `${dDD} ${firstDigits}${joint}${lastDigits}`;
  }
  return resultado11;
}

// Desafio 12
function checkA(lineA, lineB, lineC) {
  let aCheck = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    aCheck = true;
  }
  return aCheck;
}
function checkB(lineA, lineB, lineC) {
  let bCheck = false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    bCheck = true;
  }
  return bCheck;
}
function checkC(lineA, lineB, lineC) {
  let cCheck = false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    cCheck = true;
  }
  return cCheck;
}
function triangleCheck(lineA, lineB, lineC) {
  let aBCCheck = false;
  if (
    checkA(lineA, lineB, lineC) === true
    && checkB(lineA, lineB, lineC) === true && checkC(lineA, lineB, lineC)
  ) {
    aBCCheck = true;
  }
  return aBCCheck;
}

// Desafio 13
/* utilizar regular expression e .match(regExp) para procurar na string números de 1 a 9.
depois verificar se o número é acompanhado de ' cervejas', reponder com a quantidade
equivalente de copos d'água. */

/* Primeiramente, crio uma função que procura globalmente em uma string pelos 
 números de 1 a 9( /[1-9]/g ) */

function drinkFinder(string) {
  let regExp = /[1-9]/g;
  let result = string.match(regExp);
  return result;
}

/* Então, crio uma função para varrer uma array de strings e passar os strings para números */

function stringToNum(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result[index] = parseInt(array[index], 10);
  }
  return result;
}

/* Então, crio uma função que varre uma array somando os elementos */

function howMuch(array) {
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return sum;
}

/* Utilizando as funções anteriores para descobrir quantos copos de drinks foram consumidos,
a função hydrate vai decidir qual mensagem retornar de acordo com essa quantidade de copos */

function hydrate(string3) {
  let input = howMuch(stringToNum(drinkFinder(string3)));
  if (input === 1) {
    return '1 copo de água';
  }
  let result = `${input} copos de água`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
