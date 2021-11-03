const luhn = (n) => {
  /*
    Extract check digit
    Resave n w/o check digit
    Calculate check digit from resaved number
    Return true if given check digit equals the calculated check digit
  */
  const givenCheckDigit = n % 10;
  const numberWithoutCheckDigit = Math.floor(n / 10);
  const calculatedCheckDigit = calculateLuhnCheckDigit(numberWithoutCheckDigit);
  return givenCheckDigit === calculatedCheckDigit;
};


const countDigits = (n) => {
  return (n + '').length;
};

const sumDigits = (n) => {
  let result = 0;
  let remaining = n;
  while (remaining > 0) {
    result += remaining % 10;
    remaining = Math.floor(remaining / 10);
  }
  return result;
};

const calculateLuhnCheckDigit = (n) => {
  /*
    for i=0; i++; i<#digits
      nCheck += thisResultingDigit * Math.pow(10, i)
      remainingNumber = Math.floor(remainingNumber / 10)
    checkDigit = 10 - sumDigits(nCheck) % 10
  */
  let remaining = n;
  let nCheck = 0;
  for (let i = 0; i < countDigits(n); i++) {
    let thisDigit = remaining % 10;
    let thisMultiplier = (i + 1) % 2 + 1;
    let thisProduct = thisDigit * thisMultiplier;
    let thisResultingDigit = sumDigits(thisProduct);
    nCheck += thisResultingDigit * Math.pow(10, i);
    remaining = Math.floor(remaining / 10);
  }
  let checkDigit = 10 - sumDigits(nCheck) % 10;
  return checkDigit;
};

module.exports = {
  "luhn": luhn,
  "countDigits": countDigits,
  "calculateLuhnCheckDigit": calculateLuhnCheckDigit,
  "sumDigits": sumDigits,
};