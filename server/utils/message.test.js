var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage' , () => {
	it('should generate the correct message object', () =>{
		//should res in variable
		//assert fr0m match
		//assert txt maatch
		// assert created at

		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from,text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from,
			text
		})


	});

});