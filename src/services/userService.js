const bcrypt = require('bcryptjs');
const db = require('../models')

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {

            let userData = {};
            let user = await checkEmail(email);

            if(user) {
                let checkUser = await bcrypt.compare(password, user.password); // true or false
                if (checkUser) {
                    userData.errCode = 0,
                    userData.errMessage = 'check password và user name thành công';
                    delete user.password;
                    userData.user = user;
                }
                else {
                    userData.errCode = '1',
                    userData.errMessage = 'nhập mật khẩu sai rồi bạn tôi ơi';
                }
            }
            else {
                userData.errCode = '500';
                userData.errMessage = 'không tìm thấy email của bạn';
            }
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    })
}

let checkEmail = (emailUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isEmail = await db.User.findOne({
                where: { email: emailUser},
                raw: true
            })
           resolve(isEmail);
            
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = ({
    handleUserLogin,
})