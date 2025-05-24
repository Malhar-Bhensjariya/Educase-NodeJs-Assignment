const db = require('../config/db');
const { getDistanceSQL } = require('../utils/geoUtils');

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;
  const sql = `
    SELECT *, ${getDistanceSQL()}
    FROM schools
    ORDER BY distance
  `;

  db.query(sql, [latitude, longitude, latitude], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ schools: results });
  });
};
