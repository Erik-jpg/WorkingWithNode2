const { Sequelize }
const sequelize = require('sequelize');

const sequelize = new sequelize(
    process.env,DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
    {
    host: 'localhost',
    dialect: 'mysql'
}
);

module.exports = sequelize;