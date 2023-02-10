import News from "../models/NewsModel.js";
import path from "path";
import fs from "fs";

export const getNews = async(req, res)=>{
    try {
        const response = await News.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNewsById = async(req, res)=>{
    try {
        const response = await News.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveNews = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const news = req.body.news;
    const text = req.body.text;
   const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Fel på bild"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Bilden måsta vart mindre en 5 mb"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await News.create({news: news,text:text,image: fileName, url: url});
            res.status(201).json({msg: "Nyheten är postad"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateNews = async(req, res)=>{
    const product = await News.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Fel på bilden"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Måste vara minder än 5 mb"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const news = req.body.news;
    const text = req.body.text;
    
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await News.update({news:news, text:text,image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Nyhet uppdaterad"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNews = async(req, res)=>{
    const product = await News.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await News.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Nyheten är bortagen"});
    } catch (error) {
        console.log(error.message);
    }
}
