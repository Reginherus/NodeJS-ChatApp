var expect = require('expect');


var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
        latitude = 1;
        longitude = 1
    message = generateLocationMessage(from, latitude, longitude);
    
    expect(message.from).toBe(from);
    expect(message.url).toBe(`https://www.google.com/maps?q=1,1`);
    expect(typeof message.createdAt === 'number');

  });
});