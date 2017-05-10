var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
    res.header({ 'Access-Control-Method': '*' });
    res.header({ 'Access-Control-Allow-Origin': 'http://www.b.com:3000' });

    var username = req.username;
    var password = req.password;
    if (username == 'mafengshe') {
        console.log("用户名已存在");
    } else if (username !== null) {
        res.json({ text: "您已注册成功" });
    }
});

module.exports = router;