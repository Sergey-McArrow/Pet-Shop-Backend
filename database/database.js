const { Sequelize } = require('sequelize')
require('dotenv').config()

if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL is not defined in environment variables')
}
const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})
module.exports = sequelize
