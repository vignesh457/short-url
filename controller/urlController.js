const URL = require("../model/URL")
const ShortUniqueId = require("short-unique-id")

exports.getAllUrls = async(req,res)=>{
    try{
        res.status(200).send(await URL.find());
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
}

exports.addUrl = async(req,res)=>{
    try{
        const uid = new ShortUniqueId({ length: 4 });
        var newUrl = await URL.create({
            short_id: uid.rnd(),
            redirect_url: req.body.url.trim(),
            clicks: 0,
            createdBy: req.user
        });
        res.redirect(`/?id=${newUrl.short_id}`)
    }
    catch(err){
        const existingUrl = await URL.findOne({redirect_url: req.body.url})
        if(!existingUrl){
            res.redirect(`/`)
        }
        else{
            res.redirect(`/?id=${existingUrl.short_id}`)
        }
    }
}

exports.redirectUrlById = async(req, res)=>{
    try{
        const shortID = req.params.id;
        const url = await URL.findOne({short_id: shortID});
        await URL.updateOne({short_id: shortID},{clicks: url.clicks+1})
        res.redirect(url.redirect_url);
    }
    catch(err){
        res.status(500).send("Invalid URL");
    }
}
