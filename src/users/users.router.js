//* /users: [POST, GET]
//* /users:id [GET]

const router = require('express').Router()

const userServices = require('./users.services')

router.get('/users', userServices.getMyUsers)

router.post('/users', userServices.createUser)

router.get('/users:id', userServices.getOneUser)

module.exports = router