const express = require('express')
const router = express.Router()

const router = express.Router();
const apiRouts = request('./apiRouts');
const htmlRouts = request('./htmlRouts');

router.use('/', htmlRouts);
router.use('/api', apiRouts);

module.exports = router;