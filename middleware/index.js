//必须保证未登录才能继续访问的页面
exports.checkNoLogin = function (req,res,next){
    if(req.session.user){
        req.flash('error','您已经登录了，不能重复登录！');
        res.redirect('back');
    }else {
        next();
    }
};

//必须保证已登录才能继续访问
exports.checkLogin = function (req,res,next){
    if(req.session.user){
        next();
    }else {
        req.flash('error','您还没有登录，登陆后才能访问！');
        res.redirect('/users/login');
    }
};
