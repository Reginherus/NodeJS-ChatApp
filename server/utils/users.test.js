const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    testusers = new Users();
    testusers.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'

    }, {
      id: '2',
      name: 'Jen',
      room: 'Node Course'

    }, {
      id: '3',
      name: 'Julie',
      room: 'React Course'
    }]
  });

  it('should add new user', () => {

    var testusers = new Users();

    var user = {
      id: '123',
      name: 'Mike',
      room: 'NodeJS'
    };

    var resUser = testusers.addUser(user.id, user.name, user.room);

    expect(testusers.users).toEqual([user]);
  });
  it('should not remove user', () => {
    var userId = '5';
    var user = testusers.removeUser(userId);

    expect(user).toBeFalsy();
    expect(testusers.users.length).toBe(3);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = testusers.removeUser(userId);

    expect(user.id).toBe(userId);
  });
  it('should find user', () => {
    var userId = '2';
    var user = testusers.getUser(userId);

    expect(user.id).toBe('2');
  });
  it('should not find user', () => {
    var userId = '5';
    var user = testusers.getUser(userId);

    expect(user).toBeFalsy();
  });
  it('should return names for node course', () => {
    var userList = testusers.getUserList('Node Course');

    expect(userList).toEqual(["Mike", "Jen"])
  });
  it('should return names for react course', () => {
    var userList = testusers.getUserList('React Course');

    expect(userList).toEqual([ "Julie"])
  });
});