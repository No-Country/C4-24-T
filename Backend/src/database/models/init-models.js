let DataTypes = require("sequelize").DataTypes;
let _document_type = require("./document_type");
let _login = require("./login");
let _qualifications = require("./qualifications");
let _services = require("./services");
let _user_type = require("./user_type");
let _users = require("./users");

function initModels(sequelize) {
  let document_type = _document_type(sequelize, DataTypes);
  let login = _login(sequelize, DataTypes);
  let qualifications = _qualifications(sequelize, DataTypes);
  let services = _services(sequelize, DataTypes);
  let user_type = _user_type(sequelize, DataTypes);
  let users = _users(sequelize, DataTypes);

  users.belongsTo(document_type, { as: "document_type", foreignKey: "document_type_id"});
  document_type.hasMany(users, { as: "users", foreignKey: "document_type_id"});
  users.belongsTo(login, { as: "login", foreignKey: "login_id"});
  login.hasMany(users, { as: "users", foreignKey: "login_id"});
  qualifications.belongsTo(services, { as: "service", foreignKey: "service_id"});
  services.hasMany(qualifications, { as: "qualifications", foreignKey: "service_id"});
  users.belongsTo(user_type, { as: "user_type", foreignKey: "user_type_id"});
  user_type.hasMany(users, { as: "users", foreignKey: "user_type_id"});
  qualifications.belongsTo(users, { as: "users_qualifications_user", foreignKey: "users_qualifications"});
  users.hasMany(qualifications, { as: "qualifications", foreignKey: "users_qualifications"});
  services.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(services, { as: "services", foreignKey: "user_id"});

  return {
    document_type,
    login,
    qualifications,
    services,
    user_type,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
