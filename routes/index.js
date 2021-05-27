const express = require('express');
const router = express.Router();

//criação da primeira rota de acesso aos recursos
//rota: diz ao servidor o que deve executado quando acessar algum endereço (especificado por nós)
//Neste caso, quando alguém acessar localhost:3000 será ececutada a função que envia
//ao cliente (navegador) com o título e a versão da aplicação
router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

module.exports = router;