import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    refresh_token:DataTypes.TEXT
    
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Users;