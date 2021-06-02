const router = require("express").Router();
const withAuth = require("../utils/auth.js")
const {Post} = require("../models")

router.get("/login", (req, res) => {
    res.render("login")
})

router.get("/dashboard", withAuth, (req, res) => {
    res.render("dashboard")
})

router.get("/", withAuth, async (req, res) => {
    await Post.findAll({
        
    })
    
    const posts = postData.map((post) => post.get({ plain: true }));
    // query database for all posts and pass to handlebars
    res.render("homepage", {posts})
})

module.exports = router