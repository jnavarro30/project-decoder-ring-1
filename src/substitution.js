// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // alphabet empty and length guard clause
    if (!alphabet || alphabet.length != 26) return false;
    
    // alphabet all unique character letters guard clause
    const unique = new Set([...alphabet]);
    if (unique.size != 26) return false;

    const substitutes = alphabet.split('');
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // determines order of keys and values
    const createCipher = (arr1, arr2) => {
      const cipher = {};

      arr1.forEach((ltr, index) => {
        cipher[ltr] = arr2[index];
      })
    
      return cipher;
    }

    const cipher = encode ? createCipher(letters, substitutes)
                          : createCipher(substitutes, letters);

    const encoderDecoder = () => {
      let result = '';

      for (let ltr of input) {
        if (ltr === ' ') result += ' ';
        else result += cipher[ltr];
      }

      return result;
    }

    return encoderDecoder();

  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
