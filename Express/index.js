const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWTSecret = "123";
const Users = require("./../Mongo/mongo")
const connectDB = require("./../Mongo/config/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next){
    const authToken = req.headers["authorization"];
    if(authToken != undefined){
        const bearer = authToken.split(" ");
        let token = bearer[1];

        jwt.verify(token,JWTSecret, (err, data)=>{
            if(err){
                res.status(401);
                res.json({err:"token inválido"})
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        })
    }else{
        res.status(401),
        res.json({err:"Token inválido"})
    }
}


let DB = {
    users: [
        {
            id: 1,
            username: "membro-1",
            password: "password-1",
            email: "email-1",
        },
        {
            id: 2,
            username: "membro-2",
            password: "password-2",
            email: "email-2",
        },
        {
            id: 3,
            username: "membro-3",
            password: "password-3",
            email: "email-3",
        },
    ],
};

app.post("/auth", (req, res) => {
    let { email, password } = req.body;

    if (email != undefined) {
        let user = DB.users.find((u) => u.email == email);

        if (user != undefined) {
            if (user.password == password) {
                jwt.sign({id:user.id, email:user.email},JWTSecret,{expiresIn:"36h"},(err,token)=>{
                    if(err){
                        res.status(400);
                        res.json({err:"Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                })
            } else {
                res.status(401);
                res.json({ err: "credenciais invalidas" });
            }
        } else {
            res.status(404);
            res.json({ err: "o email enviado nao esta na base de dados" });
        }
    } else {
        res.status(400);
        res.json({ err: "O email enviado é inválido" });
    }
});

app.get("/users",auth,(req, res) => {
    res.statusCode = 200;
    res.json(DB.users);
});

app.listen(3030, () => {
    console.log("API RODANDO!");
});
