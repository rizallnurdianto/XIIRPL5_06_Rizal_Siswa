const express = require('express')
const router = express.Router()

const studentController = require('../controllers/student')

router.get('/students', studentController.index)

router.get('/student/id/:id', studentController.getById)

router.get('/student/:nis', studentController.getByNis)

router.post('/student', studentController.store)

router.put('/student/:nis', studentController.updateByNis)

router.delete('/student/id/:id', studentController.deleteById)

router.delete('/student/:nis', studentController.deleteByNis)

module.exports = router