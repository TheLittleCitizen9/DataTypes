class User{
    constructor(name, password){
        this.name = name
        passwordKey = Symbol("password")
        this[passwordKey] = password
    }
}