const { findAllDiets } = require("../controllers/DietsController");

const  getDietsHandler = async ( req, res ) => {
    try {
        const results = await findAllDiets();
        res.status(200).json(results); 
    } catch (error) {
        res.status(402).json({error: error.message});
    }

    // res.status(200).json("Estoy en dietas");
} 

module.exports = { getDietsHandler};