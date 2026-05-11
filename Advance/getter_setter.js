class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    // get getUsername() {
    //     return this.username;
    // }

    // set setUsername(newUsername) {
    //     this.username = newUsername;
    // }

    get password() {
        return this._password;
    }

    set password(newPassword) {
        this._password = newPassword;
    }
    
}

// const user1 = new User('john_doe', 'password123');
// console.log(user1.getUsername); // Output: john_doe

// user1.setUsername = 'deepak';
// console.log(user1.getUsername); // Output: deepak

const user2 = new User('jane_doe', 'securepassword');
console.log(user2.password); // Output: securepassword


user2.password = 'newpassword';
console.log(user2.password); // Output: newpassword