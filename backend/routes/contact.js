const express = require('express')
const router = express.Router()

const ContactController = require('../controllers/ContactController')

router.get('/', ContactController.listAll)
router.get('/show', ContactController.show)
router.post('/add', ContactController.add)
router.put('/update', ContactController.update)
router.delete('/remove', ContactController.remove)

module.exports = router