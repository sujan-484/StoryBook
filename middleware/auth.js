module.exports = {
    ensureAuth: (req, res, next) => {
        if(req.isAuthenticated()){
            return next()
        }
        else{
            req.redirect('/')
        }
    },
    ensureGuest: (req, res, next) => {
        if(req.isAuthenticated()) {
            res.redirect('/dashbaord')
        }
        else{
            return next()
        }
    }
}