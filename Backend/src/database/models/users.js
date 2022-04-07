const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    phone2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    description_profile: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    login_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'login',
        key: 'id'
      }
    },
    document_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'document_type',
        key: 'id'
      }
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_ibfk_1_idx",
        using: "BTREE",
        fields: [
          { name: "document_type_id" },
        ]
      },
      {
        name: "users_ibfk_2_idx",
        using: "BTREE",
        fields: [
          { name: "user_type_id" },
        ]
      },
      {
        name: "users_ibfk_3_idx",
        using: "BTREE",
        fields: [
          { name: "login_id" },
        ]
      },
    ]
  });
};
