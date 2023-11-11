const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
    constructor(email, password, fullname, confirmPassword) {
        this.email = email;
        this.confirmPassword = confirmPassword;
        this.password = password;
        this.name = fullname;
        // this.address = {
        //   street: street,
        //   postalCode: postal,
        //   city: city
        // };
    }

    async signup() {
        if (this.password !== this.confirmPassword) {
            throw new Error('Password and Confirm Password must match.');
        }

        const hashedPassword = await bcrypt.hash(this.password, 12);

        // Ensure that db.getDb().collection('users') is a valid collection
        const usersCollection = db.getDb().collection('users');

        if (!usersCollection) {
            throw new Error('Database connection not available.');
        }

        await usersCollection.insertOne({
            email: this.email,
            password: hashedPassword,
            name: this.name,
            // address: this.address
        });
    }
}

module.exports = User;
