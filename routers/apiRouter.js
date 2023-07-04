const { Router } = require('express');
const router = Router();

const { getData } = require('../controllers/apiControllers');


router.get('/', getData);


module.exports = router;