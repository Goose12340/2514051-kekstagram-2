const isStringLengthValid = (str, length) => str.length <= length;


function isStrPalyndrom(str) {
  const optiStr = str.replaceAll(' ', '').toLowerCase();

  let left = 0;
  let right = optiStr.length - 1;

  while (left < right) {
    if (optiStr[left] !== optiStr[right]) {
      return false;
    }
    else {
      left++;
      right--;
      return true;
    }
  }

}


function removeNum(str) {
  return parseInt(str, 10);
}

