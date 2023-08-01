const db = require('../models/index'); 
const CRUDservice = require('../services/CRUDservice')

console.log(typeof createNewUser);
class homeController  {
   // [GET] home
   async home(req, res) {

       try {
        let data = await db.User.findAll();
        console.log(data);
        res.render('homePage', {
            data: JSON.stringify(data)
        });
        
       } catch (error) {
        console.log(error);
       }
    }

    //[GET] crud
    crud(req, res) {
        res.render('crud');
     }

     // [POST] CRUD
    async CreateUser(req, res) { 
       let createUser = await CRUDservice.createNewUser(req.body);
       console.log(createUser);
       res.redirect('/crud');
    }
};

module.exports = new homeController();      