const { Router } = require('express');
const router = Router();

const { getData,
    getAllData,
    getPill,
    addData,
    updateData,
    deleteData
} = require('../controllers/apiControllers');


router.get('/', getData);

// RUTAS NUEVAS

router.get('/all', getAllData);

router.get('/:id', getPill);

router.post('/', addData);

router.put('/:id', updateData);

router.delete('/:id', deleteData);


module.exports = router;