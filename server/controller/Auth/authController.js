const User = require("../../models/AUserModel");
const CUser = require("../../models/CUserModel")

const SignUp =  async (req, res) => {
    const { email, number, password } = req.body;

    let user = new User({  email, number, password });
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
};

const SignIn = async (req,res) => {
    if(req.body.password && req.body.email){
        let user =await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:'No User Found'});
        }
    }else{
        res.send({result:'No User Found'});
    }   
};

const CSignIn = async (req,res) => {
    if(req.body.password && req.body.email){
        let user =await CUser.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:'No User Found'});
        }
    }else{
        res.send({result:'No User Found'});
    }   
};

const CSignUp =  async (req, res) => {
    const { email, number, password } = req.body;

    let cuser = new CUser({  email, number, password });
    let result = await cuser.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
};

const CProfile = async (req, res) => {
    const { email } = req.body;
    const user = await CUser.findOne({ email }).select("-password");

    if(!user){
        return({message : "User not found"});
    }
    else{
        res.send(user);
    }
}
module.exports ={ SignUp, SignIn, CSignUp, CProfile, CSignIn }