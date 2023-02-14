import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Atelje = db.define('atelje',{
    atelje: DataTypes.STRING,
    text:DataTypes.STRING,
    videoUrl:DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Atelje;

(async()=>{
    await db.sync();
})();