const data = require('../data/data.json');
const Workout = require('../models/workoutModel');

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

const getAllData = async (req, res) => {

    res.send('Capturando la ruta');

}; //!GETALLDATA

const getPill = async (req, res) => {

    res.send('Capturando la ruta');

}; //!GETPILL

const addData = async (req, res) => {

    res.send('Capturando la ruta');

}; //!ADDDATA

const updateData = async (req, res) => {

    res.send('Capturando la ruta');

}; //!UPDATEDATA

const deleteData = async (req, res) => {

    res.send('Capturando la ruta');

};


module.exports = { getData,
    getAllData,
    getPill,
    addData,
    updateData,
    deleteData
};