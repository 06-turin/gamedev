import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { IS_DEV } from '../../webpackConfigs/env';

const sequelizeOptions: SequelizeOptions = {
  host: !IS_DEV ? process.env.POSTGRES_HOST : '0.0.0.0',
  database: !IS_DEV ? process.env.POSTGRES_DB : 'bomb-db',
  username: !IS_DEV ? process.env.POSTGRES_USER : 'postgres',
  password: !IS_DEV ? process.env.POSTGRES_PASSWORD : 'newPassword',
  port: 5432,

  dialect: 'postgres', // 'mysql', 'sqlite', 'mariadb', 'mssql'
};

export const db = new Sequelize(sequelizeOptions);
