const express = require('express')
const PageController = require('./controllers/PageController')
const Calculadoras = require('./controllers/Calculadoras')
const router = express.Router()

// Controllers
const pageController = new PageController()
const calculadoras = new Calculadoras()
// Routes
// router.get('/', pageController.renderHome)
router.post('/', calculadoras.renderInteresResultado)
router.get('/', calculadoras.renderInicio)

router.get('*', pageController.renderNotFound)

module.exports = router
