'use strict';
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initUser = (sequelize) => {
  class User extends Model {
    public username: String;
    public email: String;
    public password: String;
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(connection)