exports.requireLogin = (req, res, next) => {
    // if user is not logged in, redirect to login page
    if (req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect("/login");
    }
}