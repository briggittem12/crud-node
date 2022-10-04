const express = require('express')

const usersRouter = require('./users/users.router')

const app = express()


app.use(express.json())


app.get('/', (res, req) => {
    res.status(200).json({message: 'hi'})
})

app.use('/', usersRouter)


app.listen(5000, () => {
    console.log('server startet at port')
})