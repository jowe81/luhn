const luhn = (n) => {
  /*
    Resave n w/o check digit
    
    Explode n into an array that for each digit holds the digit, its multiplier, and its new value

    Add the resulting digits together 

    Return true if that sum % 3 === n % 3

  */
  



  return n;
};


const countDigits = (n) => {
  return (n + '').length;
}

const sumDigits = (n) => {
  let result = 0;
  let remaining = n;
  while (remaining > 0) {
    result += remaining % 10;
    remaining = Math.floor(remaining / 10);
  }
  return result;
};

const calculateLuhnDigits = (n) => {
  /*
    for i=0; i++; i<#digits
      array.unshift([thisDigit, i%2+1, thisDigit*i%2+1, thisDigit*i%2+1%10])


  */
  const array = [];
  let m = n;
  for (let i = 0; i < countDigits(n); i++) {
    let thisDigit = m % 10;
    let thisMultiplier = (i + 1) % 2 + 1;
    let thisProduct = thisDigit * thisMultiplier;
    let thisResultingDigit = sumDigits(thisProduct);
    array.unshift([ thisDigit, thisMultiplier, thisProduct, thisResultingDigit]);
    m = Math.floor(m / 10);
  }
  console.log(array);

};

console.log(calculateLuhnDigits(7992739871));

module.exports = {
  "luhn": luhn,
  "countDigits": countDigits,
  "calculateLuhnDigits": calculateLuhnDigits,
  "sumDigits": sumDigits,
};