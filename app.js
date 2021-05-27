const express = require('express'); //importa o express para a aplicação
const createError = require('http-errors'); //importa pacote de erros http
const path = require('path');
const port = 3001; //cria constante para a porta pela qual se poderá acessar o servidor
const app = express(); //inicia a aplicação Express
const index = require('./routes/index');
const curriculo = require('./routes/curriculo');

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index, curriculo);

//404
app.use((req, res, next) => {
    next(createError(404));
});

//erro handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

//servidor deve ficar "escutando" a porta
app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});
