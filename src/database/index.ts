import { Sequelize } from 'sequelize'

export const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'deliveryEats_development',
  username: 'deliveryeats',
  password: 'deliveryeats',
	define: {
    underscored: true
  }
})