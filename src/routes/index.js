const express = require('express')

const router = express.Router()


//routes
router.get('/',(req, res) =>{
    res.render('index', { title: 'First website-Nodejs'})
    //res.sendFile(path.join(__dirname, 'views/index.html'))
    //console.log(path.join(__dirname,'views/index.html'))
})

router.get('/contact',(req, res) =>{
    res.render('contact', { title: 'Contact page'})
})

module.exports = router