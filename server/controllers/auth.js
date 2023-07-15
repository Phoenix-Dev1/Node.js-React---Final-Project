const bcrypt = require('bcryptjs');
const { db } = require('../db.js');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  // Check Existing user
  const q = 'SELECT * FROM users WHERE email = ? OR username = ? OR phone = ?';

  /* Testing Data */
  //console.log(req.body);
  db.query(q, [req.body.email, req.body.name, req.body.phone], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json('User already exists!');

    // Encrypt the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      'INSERT INTO users(`username`,`email`,`password`,`city`,`address`,`phone`) VALUES (?)';
    const values = [
      req.body.username,
      req.body.email,
      hash,
      req.body.city,
      req.body.address,
      req.body.phone,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json('User has been created');
    });
  });
};

const login = (req, res) => {
  // Check User existence in db

  const q = 'SELECT * FROM users WHERE username = ?';
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json('User not found!');

    // Check password
    // data - is an array, check the first element
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json('Wrong username or password');
    // Using the user unique id to create a token
    // jwtkey - can be replaced with a new key stored in the .env file
    const token = jwt.sign({ id: data[0].id }, 'secret@a2ddd2cgh45623');
    // removing the password from the data array so it will not be sent
    const { password, ...other } = data[0];

    // sending the user a cookie via the cookie-parser
    res
      .cookie('access_token', token, {
        // secuirty - scripts can't use this token, only API requests
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

const logout = (req, res) => {
  // Clear the local storage on the client-side
  res
    .status(200)
    .json({ message: 'User has been logged out', clearLocalStorage: true });
};

module.exports = {
  register: register,
  login: login,
  logout: logout,
};
