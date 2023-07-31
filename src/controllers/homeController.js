const db = require('../models/index'); 

class homeController  {
   async show(req, res) {

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
};

module.exports = new homeController();