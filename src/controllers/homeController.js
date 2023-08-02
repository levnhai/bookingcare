const db = require('../models/index'); 
const CRUDservice = require('../services/CRUDservice')

console.log(typeof createNewUser);
class homeController  {
   // [GET] home
   async home(req, res) {
       try {
        let data = await db.User.findAll();
        res.render('homePage', {
            data: JSON.stringify(data)
        });
        
       } catch (error) {
        console.log(error);
       }
    }

};

module.exports = new homeController();      