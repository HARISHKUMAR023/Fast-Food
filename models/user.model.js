const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
  constructor(email, password, fullname) {
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
      throw new Error('Passwords have to match!');
      alert('Passwords have to match!');
    }
    const hashedPassword = await bcrypt.hash(this.password, 12);

    await db.getDb().collection('users').insertOne({
      email: this.email,
      password: hashedPassword,
      name: this.name,
      // address: this.address
    });
  }
}

module.exports = User;