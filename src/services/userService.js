const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const db = require("../models");

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let user = await checkEmail(email);

      if (user) {
        let checkUser = await bcrypt.compare(password, user.password); // true or false
        if (checkUser) {
          (userData.errCode = 0),
            (userData.errMessage = "check password và user name thành công");
          delete user.password;
          userData.user = user;
        } else {
          (userData.errCode = "1"),
            (userData.errMessage = "nhập mật khẩu sai rồi bạn tôi ơi");
        }
      } else {
        userData.errCode = "500";
        userData.errMessage = "không tìm thấy email của bạn";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let hastPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

let checkEmail = (emailUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isEmail = await db.User.findOne({
        where: { email: emailUser },
        raw: true,
      });
      resolve(isEmail);
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = "";
      if (userId === "all") {
        user = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      } else {
        user = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkEmail(data.email);
      if (check) {
        resolve({
          errCode: 1,
          errMessage: "email already exists, please enter another email",
        });
      }
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
      resolve({
        errCode: 0,
        errMessage: "added user successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let checkUser = await db.User.findOne({
        where: { id: userId },
      });
      if (!checkUser) {
        resolve({
          errCode: 1,
          errMessage: "user not found",
        });
      }
      await db.User.destroy({
        where: {
          id: userId,
        },
      });
      resolve({
        errCode: 0,
        errMessage: "deleted user successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};

let editUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "mising required parameter",
        });
      }
      let checkUser = await db.User.findOne({
        where: { id: data.id },
      });

      if (!checkUser) {
        resolve({
          errCode: 2,
          errMessage: "user not found",
        });
      }

      await db.User.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          address: data.address,
        },
        {
          where: {
            id: data.id,
          },
        }
      );
      resolve({
        errCode: 0,
        errMessage: "edit user successfully",
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin,
  getAllUsers,
  createNewUser,
  deleteUser,
  editUser,
};
