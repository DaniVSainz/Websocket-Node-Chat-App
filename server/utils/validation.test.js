const expect = require('expect');

var {isRealString} = require('./validation.js');


// describe('generateMessage', () => {
//     it('should generate correct message object', () => {
//       var from = 'Jen';
//       var text = 'Some message';
//       var message = generateMessage(from, text);
  
//       expect(message.createdAt).toBeA('number');
//       expect(message).toInclude({from, text});
//     });
//   });

//isRealString
//should reject non-string values
//should reject string with only spaces
//should allow string with non-space chars

describe('checkValidator', () => {
    it('reject integers', () => {
        var notAString = 123;
        expect(isRealString(notAString)).toBeFalsy();
    });
    it('reject string with only spaces', ()=>{
        var emptyString = '';
        expect(isRealString(emptyString)).toBeFalsy();
    });
    it('allow a string with characters', ()=>{
        var realString = ' Hello my name ';
        expect(isRealString(realString)).toBeTruthy();
    });
});