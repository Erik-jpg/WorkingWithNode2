const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class User extends Model {
    validate(password){
        bcrypt.compare(password, this.password);
    }
}
User.init(
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    },
    { sequelize, modelName: 'user' }
);

User.addHook('beforeCreate',  (user) => {
    user.password = bcrypt.hash(user.password, 10);
    return user;
})

module.exports = User;