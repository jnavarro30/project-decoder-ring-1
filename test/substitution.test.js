// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('Encode message with provided substitution', () => {
    it('Should return encoded message');
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
})

describe('Decode message with provided substitution', () => {
    it('Should return decoded message');
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = 'message';
    expect(actual).to.equal(expected);
})