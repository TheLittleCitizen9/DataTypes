class User{
    constructor(name, password){
        this.name = name
        this.passwordKey = Symbol("password")
        this[this.passwordKey] = password
    }
}


class UsersList{
    constructor(){
        this.users = new Set()
        this.usersConnected = {}
    }

    enterNewUser(user){
        var arr = Array.from(this.users)
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name === user.name) {
                return false
            }
        }
        this.users.add(user)
    }

    connectUser(user){
        var arr = Array.from(this.users)
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === user) {
                this.usersConnected[user] = true
            }
        }
    }

    disconnectUser(user){
        this.usersConnected[user] = false
    }

    checkIfUserConnected(user){
        return this.usersConnected[user]
    }
}

var user = new User("Dar", "123456")

var userList = new UsersList()