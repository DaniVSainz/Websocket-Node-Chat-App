const expect = require('expect');
const {Users} = require('./users');


describe('Users', () =>{

    var users;
    beforeEach(() =>{
        users = new Users();
        users.users = [{
            id:1,
            name: 'Mike',
            room: 'Node Course'
        },{
            id:2,
            name: 'Mike2',
            room: 'Node Course2'
        },{
            id:3,
            name: 'Mike3',
            room: 'Node Course'
        }]
    })

    it('should add new User', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Daniel',
            room: 'Daniels Room'
        }
        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node Course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike','Mike3']);
    });
    it('should return names for node Course2', () => {
        var userList = users.getUserList('Node Course2');
        expect(userList).toEqual(['Mike2']);
    });

    it('should remove a User', () => {
        var id = 3 ;
        var user = users.removeUser(id);

        expect(user.id).toBe(id);
        expect(users.users.length).toBe(2);

    });
    it('should not remove a User', () => {
        var id = 4 ;
        var user = users.removeUser(id);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find User', () =>{
        var userId=2;
        var user = users.getUser(userId);
        expect(user.id).toBe(2);
    });
    it('should not find User', () =>{
        var userId=4;
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

});