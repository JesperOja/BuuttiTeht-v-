import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import { DATABASE_URL } from './config.js';

const sequelize = new Sequelize(DATABASE_URL);


const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('database connected')
  } catch (err) {
    console.log('connecting database failed', err)
    return process.exit(1)
  }

  return null
}

export{ connectToDatabase, sequelize }