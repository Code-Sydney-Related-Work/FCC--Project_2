
const convertToRoman = require('./romannumconv');
describe('Convert Number To Roman', () => {
    test('Test Case 1 - Convert Numbers into Roman Numerals', () => {
        expect(convertToRoman(2)).toEqual('II');
        expect(convertToRoman(1006)).toEqual('MVI');
    });       
});