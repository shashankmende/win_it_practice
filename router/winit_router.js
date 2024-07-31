
const winitController = require('../controller/winit_controller')

const express = require('express')

const router = express.Router()

router.route('/').get(winitController.Home)

router.route("/get_controller").get(winitController.GetWinit)

router.route('/post_winit').post(winitController.postWinit)

module.exports = router