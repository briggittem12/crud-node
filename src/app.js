const express = require('express')

const usersRouter = require('./users/users.router')

const app = express()


app.use(express.json())


app.get('/', (res, req) => {
    res.status(200).json({message: 'OK'})
})

app.use('/', usersRouter)


app.listen(9000, () => {
    console.log('server started at port 9000')
})