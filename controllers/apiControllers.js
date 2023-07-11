const data = require('../data/data.json');
const Lesson = require('../models/lessonModel');

const getData = async (req, res) => {

    try {
        
        return res.status(200).json({
            ok: true,
            data
        });

    } catch (error) {

        console.log(error);
        
        res.status(500).json({
            ok: false,
            msg: `${error}`
        });

    };

};


// NUEVOS CONTROLLERS

const getLessons = async (req, res) => {

    try {
        
        const response = await Lesson.find();

        res.status(200).json({
            ok: true,
            response
        });
        
    } catch (error) {
      
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador.',
            error
        });
        
    };

}; //!GETLESSONS

const getLessonByID = async (req, res) => {

    res.send('Capturando la ruta');

}; //!GETLESSONBYID

const addLesson = async (req, res) => {

    res.send('Capturando la ruta');

}; //!ADDLESSON

const updateLesson = async (req, res) => {

    res.send('Capturando la ruta');

}; //!UPDATELESSON

const deleteLesson = async (req, res) => {

    res.send('Capturando la ruta');

}; //!DELETELESSON


module.exports = { getData,
    getLessons,
    getLessonByID,
    addLesson,
    updateLesson,
    deleteLesson
};