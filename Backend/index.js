import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ProductRoute from "./routes/ProductRoute.js";
import NewsRoute from "./routes/NewsRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AteljeRoute from "./routes/AteljeRoute.js";
import ResaleRoute from "./routes/ResaleRoute.js";
import AboutRoute from "./routes/AboutRoute.js";
import db from "./config/Database.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

app.use(cookieParser());
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(NewsRoute);
app.use(UserRoute);
app.use(AteljeRoute);
app.use(ResaleRoute);
app.use(AboutRoute);

app.listen(5000, ()=> console.log('Bondens server är nu igång...'));