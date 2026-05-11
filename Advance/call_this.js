function setUsername(username){
    //  complex db calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
    // setUsername(username)

    // setUsername.call(username)
    setUsername.call(this,username)
    this.email=email
    this.password = password
}


const obj1 = new createUser('deepak','test@gmail.com','dsf@123')

console.log(obj1)