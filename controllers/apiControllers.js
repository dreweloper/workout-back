const { pills } = require('../data/data');

const getData = async (req, res) => {

    try {
        
        return res.status(200).json({
            ok: true,
            pills
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