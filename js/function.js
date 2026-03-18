const isStrLengthValid = (str, length) => str.length <= length;


const isStrPalyndrom = (str) => {
  const optiStr = str.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < optiStr.length; i++) {
    if (optiStr.at(i) !== optiStr.at(optiStr.length - 1 - i)) {
      return false;
    }
  }
  return true;
};


const removeNum = (str) => {
  const numberStr = String(str).replaceAll(/\D/g, '');

  const num = parseInt(numberStr, 10);

  return Number.isNaN(num) ? NaN : num;
};

isStrLengthValid('ECMAScript 2022');

isStrPalyndrom('топот');

removeNum('1 кефир, 0.5 батона');
