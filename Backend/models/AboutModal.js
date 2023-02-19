import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;
 
const About = db.define('about',{
title: DataTypes.STRING,
text: DataTypes.STRING,
image: DataTypes.STRING,
url: DataTypes.STRING,
},{
    freezTableName:true
});

export default About;
(async()=>{
    await db.sync();
})(); 
