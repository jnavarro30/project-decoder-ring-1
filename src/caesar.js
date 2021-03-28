// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // encode || decode
    if (!encode) shift *= -1;
    if (!shift || shift < -25 || shift > 25) return false;

    const inputArray = [...input.toLowerCase()];
    const encodedInput = inputArray.map((ltr, index) => {
      let currentCharCode = ltr.charCodeAt();
      // any space or non-alphanumeric character guard clause
      if (currentCharCode < 97 || currentCharCode > 122) return ltr;

      currentCharCode += shift;

      if (currentCharCode > 122) currentCharCode -= 26;
      if (currentCharCode < 97) currentCharCode += 26;

      ltr = String.fromCharCode(currentCharCode);
      return ltr;
    });

    return encodedInput.join('');
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;