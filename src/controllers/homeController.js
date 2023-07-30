
class homeController  {
    show(req, res) {
       res.render('homePage');
    }
};

module.exports = new homeController();