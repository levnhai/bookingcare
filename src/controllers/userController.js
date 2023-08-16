const db = require("../models/index");
const userService = require("../services/userService");

class userController {
  //[POST] handleLogin
  async handleLogin(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
      return res.status(500).json({
        errCode: 1,
        message: "bạn ch nhập email hoặc password",
      });
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
      errcode: userData.errCode,
      message: userData.errMessage,
      user: userData.user ? userData.user : {},
    });
  }

  // [GET] getAllUsers
  async getAllUsers(req, res, next) {
    let id = req.query.id; // All and id
    if (!id) {
      return res.status(200).json({
        errcode: 1,
        errMessage: "User not found",
      });
    }

    let users = await userService.getAllUsers(id);

    return res.status(200).json({
      errcode: 0,
      errMessage: "thành công",
      users: users,
    });
  }

  async handleNewUser(req, res, next) {
    let user = await userService.createNewUser(req.body);
    return res.status(200).json({
      user,
    });
  }

  async handleDeleteUser(req, res, next) {
    let user = await userService.deleteUser(req.body.id);
    return res.status(200).json({
      user,
    });
  }

  async handleEditUser(req, res, next) {
    let user = await userService.editUser(req.body);
    console.log(user);
    return res.status(200).json({
      user,
    });
  }
}

module.exports = new userController();
