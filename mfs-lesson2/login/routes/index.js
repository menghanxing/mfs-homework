var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'mfs-homework' });
});

/* GET login page. */
router.route('/login').get(function(req, res) {
    res.render("login", { title: 'User login' });
}).post(function(req, res) {
    var User = global.dbHandel.getModel('user');
    var name = req.body.uname;
    User.findOne({ name: uname }, function(err, doc) {
        if (err) {
            res.send(500);
            console.log(err);
        } else if (!doc) {
            req.session.error = "用户名不存在";
            res.send(404);
        } else {
            if (req.body.upwd != doc.password) {
                req.session.error = "密码错误";
                res.send(404);
            } else {
                req.session.user = doc;
                res.send(200);
            }
        }
    })
});

/* GET register page. */
router.route('/register').get(function(req, res) {
    res.render("register", { title: 'User register' });
}).post(function(req, res) {
    var User = global.dbHandel.getModel('user');
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    User.findOne({ name: uname }, function(err, doc) {
        if (err) {
            res.send(500);
            req.session.error = "网络异常错误";
            console.log(err);
        } else if (doc) {
            req.session.error = "用户名已存在";
            res.send(500);
        } else {
            User.create({
                name: uname,
                password: upwd
            }, function(err, doc) {
                if (err) {
                    res.send(500);
                    console.log(err);
                } else {
                    req.session.log = "用户名创建成功";
                    res.send(200);
                }
            });
        }
    });
});

/* GET home page. */
router.route('/home', function(req, res) {
    if (!req.session.user) {
        req.session.error = "清先登陆";
        res.redirect("/login");
    }
    res.render("home", { title: 'Home' })
})

/* GET logout page. */
router.route('/logout', function(req, res) {
    req.session.user = null;
    req.session.error = null;
    res.redirect('/');
})
module.exports = router;