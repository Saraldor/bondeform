import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const News = db.define('news',{
    news: DataTypes.STRING,
    text:DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default News;

(async()=>{
    await db.sync();
})();