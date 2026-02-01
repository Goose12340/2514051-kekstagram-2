function stringLength(str, length) {
  return str.length <= length;
}

function strPalyndrom(randomStr) {
  const newStr = randomStr.replaceAll(' ', '').toLowerCase();
  const reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}


function removeNum(str) {
  return parseInt(str, 10);
}

