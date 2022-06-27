// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function checkA(lineA, lineB, lineC) {
  let aCheck = false;
  if (lineA < (lineB + lineC) && lineA > (Math.abs(lineB - lineC))) {
    aCheck = true;
  }
  return aCheck;
}
function checkB(lineA, lineB, lineC) {
  let bCheck = false;
  if (lineB < (lineA + lineC) && lineB > (Math.abs(lineA - lineC))) {
    bCheck = true;
  }
  return bCheck;
}
function checkC(lineA, lineB, lineC) {
  let cCheck = false;
  if (lineC < (lineA + lineB) && lineC > (Math.abs(lineA - lineB))) {
    cCheck = true;
  }
  return cCheck;
}
function triangleCheck(lineA, lineB, lineC) {
  let aBCCheck = false;
  if (checkA(lineA, lineB, lineC) === true && checkB(lineA, lineB, lineC) === true && checkC(lineA, lineB, lineC)) {
    aBCCheck = true;
  }
  return aBCCheck;
}
// console.log(triangleCheck (10, 4, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
