const Joi = require('joi');
const id = Joi.number().integer()
const document_number = Joi.number().integer().min(6);
const name = Joi.string().min(3).max(100);
const last_name =Joi.string().min(3).max(100);
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','co'] } }).min(6).max(100)
const phone = Joi.string().min(5).max(12);
const phone2 = Joi.string().min(5).max(12);
const avatar = Joi.string();
const description_profile = Joi.string().min(12).max(400)
const document_type_id = Joi.number()
const user_type_id = Joi.number()
const login_id = Joi.number()

// const createProductSchema = Joi.object({
//   name: name.required(),
//   price: price.required(),
//   image: image.required(),
// });

const updateProductSchema = Joi.object({
  document_number : document_number,
  name : name,
  last_name : last_name,
  email : email,
  phone : phone,
  phone2 : phone2,
  avatar : avatar,
  description_profile: description_profile,
  document_type_id : document_type_id,
  user_type_id : user_type_id,
   login_id : login_id,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {updateProductSchema, getProductSchema }
