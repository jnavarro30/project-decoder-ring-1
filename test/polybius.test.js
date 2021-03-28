// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('When encoding, your output should still be a string', () => {
    it('Should return a string', () => {
        const actual = typeof polybius('thinkful');
        const expected = 'string';
        expect(actual).to.equal(expected);
    })
})

describe('When decoding, both i and j should be shown', () => {
    it('Should return i and j', () => {
        const actual = /i?j/.test(polybius("4432423352125413", false));
        const expected = true;
        expect(actual).to.equal(expected);
    })
})