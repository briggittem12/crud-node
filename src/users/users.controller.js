const uuid = require('uuid')


const register = [
    {
        id: 'uuid',
        first_name: 'string',
        last_name: 'string',
        email: 'string',
        password: 'string',
        birthday: 'YYYY/MM/DD'
    }
]

const getUsername = () => {
    return register
}

const getUsernamesId = (id) => {
    const users = users.find(user => user.id === id)
    return users 
}

const createNewUser = ( id, first_name, last_name, email, password
 ) => {
    let newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday: 'YYYY/MM/DD'
    }

    register.push(newUser)
    return newUser
}

console.log(createNewUser('prueba'))

module.export = {
    getUsername,
    getUsernamesId,
    createNewUser
}