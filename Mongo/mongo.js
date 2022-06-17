const mongoose = require("mongoose");
const usersModel = require("./users");

mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser: true, useUnifiedTopology: true});

const Users = mongoose.model("Users", usersModel);

// const usuario = new Users({id: 1, username:"membro-1", password :"senha-1", email: "email-1"});
// const usuario = new Users({id: 2, username:"membro-2", password :"senha-2", email: "email-2"});
// const usuario = new Users({id: 3, username:"membro-3", password :"senha-3", email: "email-3"});
// usuario.save();


Users.find({}).then(Users => {
    console.log(Users)
}).catch(err =>{
    console.log(err);
})

module.exports = Users;
