exports.verifyAddSchoolInput = (req, res, next) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Invalid input fields' });
  }
  next();
};

exports.verifyLocationQuery = (req, res, next) => {
  const { latitude, longitude } = req.query;
  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Invalid query parameters' });
  }
  next();
};
