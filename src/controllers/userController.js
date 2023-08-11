const db = require('../models/index'); 
const userService = require('../services/userService')

class userController  {

    //[POST] handleLogin
    async handleLogin(req, res) {

        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            res.status(500).json({
                errCode: 1,
                message: 'bạn ch nhập email hoặc password'
            })
        }

        let userData = await userService.handleUserLogin(email, password);

        res.status(200).json({
            errcode: userData.errCode,
            message: userData.errMessage,
            user : userData.user ? userData.user: {}
            
        })
     }

};


module.exports = new userController();      