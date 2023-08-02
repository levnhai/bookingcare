const db = require('../models/index'); 
const CRUDservice = require('../services/CRUDservice')

console.log(typeof createNewUser);
class crudController  {

    //[GET] crete
    create(req, res) {
        res.render('crud');
     }

     // [POST] create
    async store(req, res) { 
       await CRUDservice.createNewUser(req.body);
       res.redirect('/crud');
    }

    // [GET] ALl USERS
    async getAllUser(req, res) {
        let data = await CRUDservice.getAllUsers();
        res.render('getUser.ejs', {
            data : data
        });
    }

    //[GET USER/:ID/edit
    async getUserById(req, res, next) {
    
        let userId = req.params.id;
        
        if(userId) {
            let data = await CRUDservice.getUserInfoById(userId);
            res.render('editCRUD.ejs', {
                data
            });
        }
        else {
            next();
        }
    }

    // [PUT] edit ID
    async update(req, res) {
        
        let data = req.body;
        await CRUDservice.updateUserInfoById(data);
        res.redirect('/crud');
    }

    async delete(req, res) {

        let userId = req.params.id;
        await CRUDservice.deleteUserInfoById(userId);
        res.redirect('/crud');
    }
    
};


module.exports = new crudController();      