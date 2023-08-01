
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const db = require('../models')

let createNewUser = (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashPassword = await hastPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPassword,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender,
                roleId: data.roleId,
                phoneNumber: data.phoneNumber,
                positionId: data.positionId,
           })
           resolve('add data user success')
        } catch (error) {
            reject(error);
        }
    })
}

let hastPassword = (password) => {
    return new Promise( async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = ({
    createNewUser
})