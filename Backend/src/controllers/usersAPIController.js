const usersModel = require("../models/usersModel");
const bcryptjs = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const usersAPIController = {
  list: async (req, res) => {
    try {
      let user = await usersModel.find?.();
      let protocol= req.protocol
      let host= req.headers.host
      let result = user.map((value) => {
        let validation=[null,undefined,""]
        let img;
        validation.includes(value.avatar)?
        img = protocol+'://'+host+'/img/'+'default-user.png':
        img = protocol+'://'+host+'/img/'+value.avatar

        return {
          id: value.id,
          document_number: value.document_number,
          name: value.name,
          last_name: value.last_name,
          email: value.email,
          phone: value.phone,
          phone2: value.phone2,
          avatar: img,
          description_profile: value.description_profile,
          document_type: value.document_type,
          user_type: value.user_type,
          login_id: value.login,
        }
      })
      let respuesta = {
        meta: {
          status: 200,
          total: result.length,
          url: "api/v1/users",
        },
        data: result,
      };
      res.status(200).json(respuesta);
    
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
          let {user_name, password}= req.body
          const {document_number,name,last_name,email,phone,phone2,description_profile,document_type_id,user_type_id} = req.body
          password= bcryptjs.hashSync(password, 10)
          const login = await usersModel.createLogin(user_name, password)
          let file = req?.file
          file? file: file={filename:'default-user.png'}
          const create = await usersModel.create(
            {
              document_number,
              name,
              last_name,
              email,
              phone,
              phone2,
              description_profile,
              document_type_id,
              user_type_id,
              login_id: login?.id,
            },
            file
          );

            res.status(201).json({
              create,
            });
          }  catch (error) {
            res.status(400).json({
              message: error.message,
      });
    }
  },
  delete: async (req, res) => {
    //PARA ELIMINAR UN USUARIO SE DEBEN ELIMINAR SUS SERVICIOS PRIMERO
    try {
          let {id}= req.params
          let user= await usersModel.findByPk(id); 
          let validation=[null,undefined,"","default-user.png"]
          
          if(validation.includes(user.avatar)){
            fs.unlinkSync(path.join(__dirname, '../../public/img/'+ user.avatar))
          }
          let {login_id}= user;
          const destroy = await usersModel.delete(id);
          const logindestroy = await usersModel.deleteLogin(login_id);
          if (destroy == 1 || logindestroy == 1) {
            res.status(200).json({
              message: "Delete",
              id: id,
            });
          } else {
            res.status(404).json({
              message: "Error id not found",
            });
          } 
          }  catch (error) {
            res.status(400).json({
              message: error.message,
      });
    }
  },
  update: async (req, res) => {
    try {
      let update;
      const { id } = req.params;
      let body= req.body
      const file = req?.file
       let detail = await usersModel.findByPk(id);
       let oldAvatar= detail.avatar;
       file? 
       update = await usersModel.update(id,{...body,avatar:file.filename}):
       update = await usersModel.update(id,{...body})
       
       
      if (update[0] == 1) {
        if (detail == null || detail == undefined) {
          res.status(404).json({
            message: "campaign Not Fount",
          });
        } else {
          let validation=[null,undefined,"","default-user.png"]
          if(validation.includes(user.avatar)){
            fs.unlinkSync(path.join(__dirname, '../../public/img/'+ oldAvatar))
          }

          detail = await usersModel.findByPk(id);
          res.status(200).json({
            message: "Update",
            data: detail,
          });

        }
      } else {
        res.status(404).json({
          message: "no changes recorded",
        });
      }
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  detail: async (req, res) => {
    try {
      let { id } = req.params;
      let detail = await usersModel.findByPk(id);
      if (detail == null || detail == undefined) {
        res.status(404).json({
          message: "404 Not Found",
        });
      } else {
        let protocol= req.protocol
        let host= req.headers.host
        let img = protocol+'://'+host+'/img/'+detail.avatar
        let user={
          id: detail.id,
          document_number: detail.document_number,
          name: detail.name,
          last_name: detail.last_name,
          email: detail.email,
          phone: detail.phone,
          phone2: detail.phone2,
          avatar: img,
          description_profile: detail.description_profile,
          document_type: detail.document_type,
          user_type: detail.user_type,
          login_id: detail.login,
        }
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(404).json({
        message: "404 Not Found",
      });
    }
  },
};

module.exports = usersAPIController;
