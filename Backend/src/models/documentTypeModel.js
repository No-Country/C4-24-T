const db = require("../database/models");

const documentTypeModel={
find: async () =>{
    try {
        const document_type = await db.document_type.findAll() 
        return document_type;
    } catch (error) {
        throw new Error("document_types not found");
    }
}
};

module.exports = documentTypeModel