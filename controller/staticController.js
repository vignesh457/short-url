const URL = require("../model/URL")

exports.viewLandingPage = async(req, res)=>{
    const id = req.query?.id
    const allUrls = await URL.find({createdBy: req.user._id})
    const baseUrl = `${req.protocol}://${req.get('host')}/url/`;
    res.render("home",{
        urls: allUrls,
        id: id,
        baseUrl: baseUrl
    })
}
