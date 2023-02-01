import {Sequelize} from "sequelize";

const db = new Sequelize('bondeform','root','!@#Lu78na#',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;