const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const userRouter = {}
const JWT_SECRET='HGSFKHSDGKHDFGJHG'
const JWT_EXPIREATION='1h'
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

userRouter.regisetr = async (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: "0000000",
        password: req.body.password,
        
    });

    newUser.save().then(doc => {
        console.log(doc)
        return res.status(200).send({
            message: 'saved profile'
        })
    }).catch(err => { console.log(err) });
}

userRouter.login = async (req, res, next) => {
    console.log("server here")
    console.log(req.body.email);
    const { email, password } = req.body;
    User.findOne({ email: email }).then(doc =>{
        console.log(doc)
    }).catch(e =>{console.log(e)});
    try {
        const user = await User.findOne({ email: email });
        
        if (!user) {
            const err = new Error("the email ${email} was not found");
            err.status = 401;
            next(err);
        }


        user.isPass(password, user.password, (err, matched) => {
            console.log(matched)
            if (matched) {
                const secret =JWT_SECRET;
                const exp = JWT_EXPIREATION;
                const token = jwt.sign({ _id: user._id }, secret, { expiresIn: exp });
                localStorage.setItem("id", user._id);
                console.log(localStorage.getItem("id"))
                return res.status(200).send({ token:token,userId: user._id });
            }
           
            res.status(401).send({
                err: 'invalid login'
            })
        })
    } catch (e) {
        next(e)
    }

}

module.exports = userRouter;