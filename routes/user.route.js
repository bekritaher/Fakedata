const express = require('express')
const router  = express.Router()

const UserController = require('../controllers/UserController')

router.get('/index',UserController.index)
//router.get('/show/:id',UserController.show)
//router.get('/shows/:id',UserController.shows)
router.get('/',UserController.index)
router.post('/stores',UserController.stores)
router.get('/show/:id',UserController.show)

module.exports=router