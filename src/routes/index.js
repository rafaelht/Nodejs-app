const express = require('express')

const router = express.Router()


//routes
router.get('/',(req, res) =>{
    res.render('index', { title: 'First website-Nodejs'})
    //res.sendFile(path.join(__dirname, 'views/index.html'))
    //console.log(path.join(__dirname,'views/index.html'))
})

//Test

router.get('/contact',(req, res) =>{
    res.render('contact', { title: 'Contact page'})
})


router.get('/about',(req, res) =>{
    res.render('about', { title: 'About'})
})

module.exports = router