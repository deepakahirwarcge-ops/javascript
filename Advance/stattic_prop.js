class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }
    // createId(){
    //     return `123`
    // }

    static createId(){
        return `123`
    }
}


const deepak = new User("deepak")

// console.log(deepak.createId()) // error

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const obj1 = new Teacher("Dreee","fdskjh@gmail.com")

console.log(obj1)
obj1.logMe()

// console.log(obj1.createId()) // error