const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/schoolController');
const { verifyAddSchoolInput, verifyLocationQuery } = require('../middlewares/verifyInput');

router.post('/addSchool', verifyAddSchoolInput, addSchool);
router.get('/listSchools', verifyLocationQuery, listSchools);

module.exports = router;
