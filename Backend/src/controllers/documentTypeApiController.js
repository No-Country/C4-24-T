const documentTypeModel = require('../models/documentTypeModel')
const documentTypeAPIController={

    list: async (req, res) => {
       try {
           const respuesta = await documentTypeModel.find()
           res.status(200).json(respuesta);
       } catch (error) {
            res.status(400).json({
                message: error.message,
            });
       }
      }    

}
module.exports = documentTypeAPIController;