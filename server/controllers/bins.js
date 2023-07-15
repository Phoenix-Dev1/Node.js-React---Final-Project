const { db } = require('../db.js');

const getBins = (req, res) => {
  const q =
    'SELECT bins.id, bins.address, bins.city, bins.last_modified, categories.name AS type FROM bins JOIN categories ON bins.type = categories.id';
  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.status(200).json(data);
  });
};

const deleteBin = (req, res) => {
  const binId = req.params.id;
  const q = 'DELETE FROM bins WHERE id = ?';
  db.query(q, [binId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.status(200).json(result);
  });
};

const createBin = (req, res) => {
  const { address, city, type, last_modified } = req.body;
  const q =
    'INSERT INTO bins (address, city, type, last_modified) VALUES (?, ?, ?, ?)';
  db.query(q, [address, city, type, last_modified], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const newBin = { id: result.insertId, address, city, type, last_modified };
    return res.status(201).json(newBin);
  });
};

const updateBin = (req, res) => {
  //console.log('In update Controller');
  const binId = req.params.id;
  const { address, city, type, last_modified } = req.body;
  const q =
    'UPDATE bins SET address = ?, city = ?, type = ?, last_modified = ? WHERE id = ?';
  db.query(q, [address, city, type, last_modified, binId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const updatedBin = { id: binId, address, city, type, last_modified };
    return res.status(200).json(updatedBin);
  });
};

module.exports = {
  getBins: getBins,
  deleteBin: deleteBin,
  createBin: createBin,
  updateBin: updateBin,
};
