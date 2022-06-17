const express = require("express"); // importando o express
const app = express(); //iniciando o express

app.get("/", function (req, res) {
    res.send("Bem vindo");
    //res.send("outra resposta");//não é possível duas respostas
});
app.get("/blog/:parametro?", function (req, res) {
    res.send("Bem vindo ao meu blog");
});
app.get("/ola/:nome/:empresa", function (req, res) {
    //REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    const empresa = req.params.empresa
    const nome = req.params.nome;
    res.send(`Bem vindo ao meu blog ${nome} que trabalha na ${empresa}`);
});


app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com sucesso!");
    }
});
