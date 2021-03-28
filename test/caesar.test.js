// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');

describe('If the shift vaule is not present, less or more than 25 then should return false', () => {
    it('Should return false', () => {
        const actual = caesar('any', 26);
        const expected = false;
        expect(actual).to.equal(expected);
    })
})

describe('Ignores capital letters', () => {
    it('Should return all lowercase letters', () => {
        const actual = caesar('THIS IS A SECRET MESSAGE!', 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    })
})

describe('If shifts go past the beginnning or end of the alphabet perform a wrap around', () => {
    it('Should cause "z" to wrap around and become "c"', () => {
        const actual = caesar('z', 3);
        const expected = 'c';
        expect(actual).to.equal(expected);
    })
})

describe('Spaces or non-alphabetic symbols should be maintained throughout', () => {
    it('Should return input with spaces and or non-alpahbetic symbols', () => {
        const actual = caesar('This is a secret message!', 8);
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
    })
})

describe('If encode equals false, input must be decoded', () => {
    it('Should return decoded input', () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
    })
})
