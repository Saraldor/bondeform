import Resale from "../models/ResaleModal.js";
import path from "path";
import fs from "fs";

export const getResale = async(req, res)=>{
    try {
        const response = await Resale.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getResaleById = async(req, res)=>{
    try {
        const response = await Resale.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveResale = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "Ingen fil är uppladdad"});
    const name = req.body.name;
    const text = req.body.text;
    const instagram = req.body.instagram;
    const facebook = req.body.facebook;
    const homepage = req.body.homepage;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Fel på bilden"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Bilden måsta vara mindre en 5 mb"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Resale.create({name:name,text:text,instagram:instagram,facebook:facebook,homepage:homepage,image: fileName, url: url});
            res.status(201).json({msg: "Åteförsäljare  är nu upplagad"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateResale = async(req, res)=>{
    const product = await Resale.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Ingen Data"});
    
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
    const name = req.body.name;
    const text = req.body.text;
    const instagram = req.body.instagram;
    const facebook = req.body.facebook;
    const homepage = req.body.homepage;
    
    
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Resale.update({name:name, text:text,instagram:instagram,facebook:facebook,homepage:homepage,image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Återförsäljare är nu uppdaterad"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteResale = async(req, res)=>{
    const product = await Resale.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "Ingen data funnen"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Atelje.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Denna åteförsäljare är nu bortagen"});
    } catch (error) {
        console.log(error.message);
    }
}
