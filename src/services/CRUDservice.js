
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
           });
           resolve('add data user success');
        } catch (error) {
            reject(error);
        }
    })
}

let hastPassword = (password) => {
    return new Promise( async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync("B4c0/\/", salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    })
}

let getAllUsers = () => {
    return new Promise( async (resolve, reject) => {
        try {
            let getAllUsers = await db.User.findAll({
                raw: true,
            });
            resolve(getAllUsers);
        } catch (error) {
            reject(error);
        }
    });
}

let getUserInfoById = (userID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: userID},
                raw: true,
            });
            resolve(user);
        } catch (error) {
            reject(error);
        }
    })
}

let updateUserInfoById = (data) => {
    return new Promise( async (resolve, reject) => {
      try {
         await db.User.update({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address
            }, {
            where: {
                id: data.id
            }
        })
        resolve();
      } catch (error) {
        console.log('looxix');
      }
    })
}
    
module.exports = ({
    createNewUser,
    getAllUsers,
    getUserInfoById,
    updateUserInfoById
})