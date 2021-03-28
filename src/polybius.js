// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase();
  
    // even amount of numbers guard clause
    const removeSpaces = input.split(' ').join('');
    if (removeSpaces.length % 2 && /\d/.test(input)) return false;
  
    const polybiusSquare = () => {
      const numbers = [];
      let charNum = 97;
  
      // square keys
      for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) numbers.push(`${j}${i}`);
      }
  
      // add square values
      const square = numbers.reduce((acc, num) => {
        const currentChar = String.fromCharCode(charNum);
  
        if (currentChar === 'i') {
          acc[num] = '(i/j)';
          charNum++;
        } else acc[num] = currentChar;
  
        charNum++;
        return acc;
      }, {});
  
      return square;
    }
  
    const square = polybiusSquare();
  
    // decoding
    const decoder = code => {
      let temp = [];
      let result = "";
  
      for (let i = 0; i < code.length; i++) {
        temp.push(code[i]);
        if (temp.length === 2) {
          temp = temp.join('');
          result += square[temp];
          temp = [];
        }
      }
      
      return result;
    }
  
    // encoding
    const encoder = input => {
      let result = '';
      const keys = Object.keys(square);
      
      for (let i = 0; i < input.length; i++) {
        let ltr = input[i];
         if (ltr === 'i' || ltr === 'j') result += 42;
  
        keys.forEach(key => {
          if (square[key] === ltr) result += key;
        });
      }
  
      return result;
    }
  
    const encoderDecoder = (input, callback) => {
      const words = input.split(' ');
  
      const wordArr = words.map(word => callback(word));
      return wordArr.join(' ');
    }
    
    return encode ? encoderDecoder(input, encoder) : encoderDecoder(input, decoder);
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
