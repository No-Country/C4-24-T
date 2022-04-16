const res = require("express/lib/response");
const db = require("../database/models");

const usersModel = {
  // seleccina todos los registos existentes en la tabla users
  find: async () => {
    try {
      const list = await db.users.findAll({
        include: [{ association: "document_type" },{ association: "login" },{ association: "user_type" }]
      });
      return list;
    } catch (error) {
      throw new Error("users not found");
    }
  },
  findByPk: async (id) => {
    try {
        const user = await db.users.findByPk(id);
        return user;
    } catch (error) {
      console.log(error)
      throw new Error("user not found")
    }
  },
  create: async (dates,file) => {
    try {
        const{filename}=file;
      const create = await db.users.create({
        ...dates,avatar: filename 
      });
      return create;
    } catch (error) {
      throw new Error("user not create");
    }
  },
  createLogin: async (user_name,password)=>{
      try {
          const create = await db.login.create({
            user_name,password
          })
          return create;
      } catch (error) {
        console.log(error)
        throw new Error("userLogin not create")
      }
  },
  
  update: async (id,dates) => {
    try {
      let update; 
        update = await db.users.update(
          {
            ...dates,
          },
          {
            where: { id: id },
          }
        );
        return update;  
      // }
     
    } catch (error) {
      throw new Error("User not update");
    }
  },

  delete: async (id) => {
    try {
      const deletee = await db.users.destroy({
        where: {
          id: id,
        },
      });
      return deletee;
    } catch (error) {
       console.log(error.message);
    }
  },
  deleteLogin: async (id) => {
    try {
      const deletee = await db.login.destroy({
        where: {
          id: id,
        },
      });
      return deletee;
    } catch (error) {
      console.log(error.message);
    }
  },
  findByEmail : async function(email) {
		try{
		 const allUsers = await this.find();
		 const userFound = await allUsers.find((user) => 
		 user.email === email);
		 return userFound;
	 } catch (err){
		 console.log(err)
		 return err;
	 }
	 },
   findByUser : async function(username) {
		try{
		 const allUsers = await db.login.findAll();
		 const userFound = await allUsers.find((user) => 
		 user.user_name === username
     )
		 return userFound

	 } catch (err){
		 console.log(err)
		 return err;
	 }
	 },
   findByDocument: async function(document_number) {
     try {
       const user = await db.users.findAll({
         where:{
           document_number: document_number
         }
       })
       return user;
     } catch (err){
       console.log(err)
		 return err;
     }
   },
   findbyPkUser: async (user_name) => {
    try {
      const user = await db.login.findAll({
        where:{ user_name: user_name
        }
      })
      return user;
    } catch (error) {
      return error;
    }
   }
};
module.exports = usersModel;
