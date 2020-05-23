const express = require('express');
const router = express.Router();
const passport = require('passport');
const userRouter = require('../router/user.router');
const OrderRouter = require('../router/orders.router');
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
router.post('/regisetr', userRouter.regisetr);
router.post('/auth', userRouter.login);

// --------customize and protect the routes------------//
router.all("*", (req, res, next) => {
    console.log(req.headers.authorization);
   // passport.authenticate('jwt', { session: false }, (err, user) => {
        if (req.headers.authorization==null ) {
            const err = new Error("You are not authorized to access this area");
            err.status = 401;
            throw err;
        }
        //req.user = user;
        return next();
   // })(req, res, next);
})


// === protected routed ====//
router.get('/Order/:exp_id', OrderRouter.get);
router.post('/Order', OrderRouter.create);
router.delete('/Order/:exp_id', OrderRouter.remove);
router.put('/Order/:exp_id', OrderRouter.update);
module.exports = router;