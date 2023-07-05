const data = require('../data/data.json');

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


module.exports = { getData };