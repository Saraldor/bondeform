import About from "../models/AboutModal.js";
import path from "path";
import fs from "fs";

export const getAbout = async(req, res)=>{
    try {
        const response = await About.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAboutById = async(req, res)=>{
    try {
        const response = await About.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveAbout = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const title = req.body.title;
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
            await About.create({title: title,text:text,image: fileName, url: url});
            res.status(201).json({msg: "Uppladdad"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateAbout = async(req, res)=>{
    const product = await About.findOne({
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
    const title = req.body.title;
    const text = req.body.text;
    
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await About.update({title:title, text:text,image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Uppdaterad"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAbout = async(req, res)=>{
    const product = await About.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await About.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Bortagen"});
    } catch (error) {
        console.log(error.message);
    }
}