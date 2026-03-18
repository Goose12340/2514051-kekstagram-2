const isStrLengthValid = (str, length) => str.length <= length;


function isStrPalyndrom(str) {
  const optiStr = str.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < optiStr.length; i++) {
    if (optiStr.at(i) !== optiStr.at(optiStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
}


function removeNum(str) {
  const numberStr = String(str).replaceAll(/\D/g, '');

  const num = parseInt(numberStr, 10);

  return Number.isNaN(num) ? NaN : num;
}

console.log(isStrLengthValid('ECMAScript 2022'));
console.log(isStrPalyndrom('топот'));
console.log(removeNum('1 кефир, 0.5 батона'));
