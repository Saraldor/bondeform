import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Resale = db.define('resale',{
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    instagram:DataTypes.STRING,
    facebook:DataTypes.STRING,
    hompage:DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Resale;

(async()=>{
    await db.sync();
})();