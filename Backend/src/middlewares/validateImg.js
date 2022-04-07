const { check,body } = require('express-validator');
const path = require('path');
const validateImg =[
    body('avatar')
        .custom((value,{req}) =>{
            let file = req.file
            let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg'];
            
            if(!file){
                // throw new Error('Tienes que subir una imagen')
            }else{
                let fileExtension = path.extname(file.originalname)
                if (!acceptedExtensions.includes(fileExtension)){
                    throw new Error(`Las extenciones de archivo permitidas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true;
        }),
]

module.exports = validateImg;