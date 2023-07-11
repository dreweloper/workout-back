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
        
        const data = await Lesson.find();

        res.status(200).json({
            ok: true,
            data
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

    const { id } = req.params;


    try {

        const data = await Lesson.findById(id);

        if(data){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `Error: no se ha encontrado el documento con ID ${id}.`
            });

        };
        
    } catch (error) {
    
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador.',
            error: error.message
        });

    };

}; //!GETLESSONBYID


const addLesson = async (req, res) => {

    const newLesson = new Lesson(req.body);

    try {
        
        const data = await newLesson.save();

        res.status(201).json({
            ok: true,
            data
        });

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador.',
            error: error.message
        });

    };

}; //!ADDLESSON


const updateLesson = async (req, res) => {

    const { id } = req.params;

    const body = req.body;


    try {
        
        const data = await Lesson.findByIdAndUpdate(id, body, { new: true });

        if(data){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `Error: no se ha podido actualizar la lección con ID ${id}.`
            });

        };

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador.',
            error: error.message
        });

    };

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