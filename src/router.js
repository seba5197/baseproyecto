const express = require('express')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()

// Routes
router.get('/', pageController.renderHome)

router.get('*', pageController.renderNotFound)

module.exports = router
