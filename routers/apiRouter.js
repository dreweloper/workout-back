const { Router } = require('express');
const router = Router();

const { getData,
    getLessons,
    getLessonByID,
    addLesson,
    updateLesson,
    deleteLesson
} = require('../controllers/apiControllers');


// router.get('/', getData);

// RUTAS NUEVAS

router.get('/', getLessons);

router.get('/:id', getLessonByID);

router.post('/', addLesson);

router.put('/:id', updateLesson);

router.delete('/:id', deleteLesson);


module.exports = router;