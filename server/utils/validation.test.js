var expect = require('expect');

const { isRealString } = require('./validation');

describe('Validate Display and Room Name input fields', () => {
  var validName = isRealString('TestName');
  var invalidName = isRealString('');

  it('should allow string with non-space characters', () => {
    expect(validName).toBe(true);
  });
  it('should reject if invalid string', () => { 
    expect(invalidName).toBe(false);
  });
  it('should reject if only spaces', () => { 
    expect(isRealString('   ')).toBe(false);
  });
});