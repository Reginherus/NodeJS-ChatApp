var expect = require('expect');


var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Nate';
        text = 'Some Message';
        message = generateMessage(from, text);

      expect(() => {
        expect(message.text).toBe(generatedMessage.text);
        expect(message.from).toBe(generatedMessage.from);
        expect(typeof message.createdAt === 'number');
      })
  });
});