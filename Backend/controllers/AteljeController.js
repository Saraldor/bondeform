import Atelje from "../models/AteljeModal.js";
import path from "path";
import fs from "fs";

export const getAtelje = async(req, res)=>{
    try {
        const response = await Atelje.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getAteljeById = async(req, res)=>{
    try {
        const response = await Atelje.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveAtelje = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "Ingen fil är uppladdad"});
    const atelje = req.body.atelje;
    const text = req.body.text;
    const videoUrl = req.body.videoUrl;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Fel på bilden"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Bilden måsta vart mindre en 5 mb"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Atelje.create({atelje:atelje,text:text,videoUrl:videoUrl,image: fileName, url: url});
            res.status(201).json({msg: "Atelje artikel är nu upplagad"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateAtelje = async(req, res)=>{
    const product = await Atelje.findOne({
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
    const atelje = req.body.atelje;
    const text = req.body.text;
    const videoUrl = req.body.videoUrl;
    
    
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Atelje.update({atelje:atelje, text:text,videoUrl:videoUrl,image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Atelje texten är uppdaterad"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteAtelje = async(req, res)=>{
    const product = await Atelje.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Atelje.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Atelje text är bortagen"});
    } catch (error) {
        console.log(error.message);
    }
}
