const { db } = require('../db.js');

const getBins = (req, res) => {
  const q = 'SELECT * FROM bins';
  db.query(q, (err, data) => {
    if (err) {
      console.error(err); // Log the error message
      return res.status(500).send(err);
    }
    return res.status(200).json(data);
  });
};

module.exports = {
  getBins: getBins,
};
