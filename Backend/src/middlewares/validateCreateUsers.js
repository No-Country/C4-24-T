const { check,body } = require('express-validator');
const path = require('path');
const validateCreateUsers =[
    check('user_name')
    .notEmpty().withMessage('Debes completar el campo nombre de usuario').bail()
    .isLength({min: 4,max: 45}).withMessage('El nombre debe tener min:4 max:45 caracteres'),
    check('password')
    .notEmpty().withMessage('Debes completar el campo contraseña').bail()
    .isLength({min: 8,max: 400}).withMessage('El nombre debe tener min:4 max:400 caracteres'),
    check('document_number')
        .notEmpty()
        .withMessage('Debes completar el campo numero de documento').bail()
	    .isInt().withMessage('Debes ingresar un numero').bail()
        .isLength({min: 6,max: 45}).withMessage('El nombre debe tener min:6 max:45 caracteres'),
    check('name')
        .notEmpty()
        .withMessage('Debes completar el campo nombre').bail()
        .isLength({min: 3, max: 100}).withMessage('El nombre debe tener min:3 max:100 caracteres'),
    check('last_name')
        .notEmpty().withMessage('Debes completar el campo apellido').bail()
        .isLength({min: 3, max: 100}).withMessage('El nombre debe tener min:3 max:100 caracteres'),
    check('email')
        .notEmpty() .withMessage('¡Debes ingresar un email!').bail()
        .isLength({min: 6, max: 100}).withMessage('El email debe tener min:6 max:100 caracteres').bail()
        .isEmail() .withMessage('Debe ingresar un email valido'),
	check('phone')
        .notEmpty().withMessage('Debes ingresar un telefono')
        .isLength({min: 5,max: 12}).withMessage('El rango de caracteres permitido es min:5 max:12').bail()
        .isInt().withMessage('Solo se permiten numeros'),
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
check('description_profile')
    .notEmpty().withMessage('Debes ingresar una descripción').bail()
    .isLength({min:12,max: 400}).withMessage('Debes agregar una descripcion de al min 15 caracteres max 400').bail()
    .withMessage('Debes ingresar una descripcion valida').bail(),
check('document_type_id')
    .notEmpty()
    .withMessage('Debes enviar el tipo de documento').bail()
    .isInt().withMessage('Debes enviar un valor valido'),
check('user_type_id')
    .notEmpty()
    .withMessage('Debes enviar el tipo de usuario').bail()
    .isInt().withMessage('Debes enviar un valor valido'),

]

module.exports = validateCreateUsers;