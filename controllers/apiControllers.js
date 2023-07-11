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

        if(data.length > 0){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'No se han encontrado documentos en la base de datos.'
            });

        };
        
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

        if(data){

            res.status(201).json({
                ok: true,
                msg: 'El documento se ha creado con éxito.',
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'Error: no se ha podido guardar el documento en la base de datos.'
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

}; //!ADDLESSON


const updateLesson = async (req, res) => {

    const { id } = req.params;

    const body = req.body;


    try {
        
        const data = await Lesson.findByIdAndUpdate(id, body, { new: true });

        if(data){

            res.status(200).json({
                ok: true,
                msg: `El documento con ID ${id} se ha editado con éxito.`,
                data
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `Error: no se ha podido actualizar el documento con ID ${id}.`
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

    const { id } = req.params;


    try {
        
        const data = await Lesson.findByIdAndDelete(id);

        if(data){

            res.status(200).json({
                ok: true,
                msg: `El documento con ID ${id} se ha eliminado correctamente.`
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: `Error: no se ha podido eliminar el documento con ID ${id}.`
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

}; //!DELETELESSON


module.exports = { getData,
    getLessons,
    getLessonByID,
    addLesson,
    updateLesson,
    deleteLesson
};