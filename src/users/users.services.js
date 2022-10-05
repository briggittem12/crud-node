const { getUsername, getUsernameId, createNewUser } = require('./users.controller')

const getMyUsers = (req, res) => {
    const data = getUsername()
        res.status(200).json(data)
}

const getOneUser = (req, res) => {
    let id = req.params.id
    let data = getUsernameId(id)

        if ( data ) {
            res.status(200).json(data)
        } else {
            res.status(404).json({id: id, message: "Invalid ID"})
        }
}

const createUser = () => {
    const { id, first_name, last_name, email, password } = req.body
        if( id, first_name, last_name, email, password){
            const data = createNewUser(id, first_name, last_name, email, password)
            res.status(200).json(data)
        } else {
            res.status(404).json({message: 'Missing users'})
        }
}

module.export = {
   getMyUsers,
   getOneUser,
   createUser 
}