const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    // le decimos que tome la informacion dek req segun el caso
    // req body || req.params || req query
    const data = req[property];
    //si hay algun error o no se cumple alguna validacion
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
