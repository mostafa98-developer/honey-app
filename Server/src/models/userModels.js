const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, index: true },
    phone: { type: String },
    password: { type: String, required: true, index: true },
    joind: { type: Date, default: new Date() },
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (e) {
        return next(e);
    }
})

userSchema.methods.isPass = function (pass, hashed, callback) {
    bcrypt.compare(pass, hashed, (err, isPass) => {
        if (err) { return callback(err) }
        callback(null, isPass);
    })
};
// userSchema.methods.toJSON() = function () {
//     const userObject = this.toObject();
//     delete userObject.password;
//     return userObject; 
    
// }
module.exports = mongoose.model('userSchema', userSchema);