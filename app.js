require('dotenv').config();
const livroRouter = require('./ms-livro/routes/livroRoute.js');
const usuarioRouter = require('./ms-autorizacao/routes/usuarioRoute.js');
const avaliacaoRouter = require('./ms-avaliacoes/routes/avaliacaoRoute.js');
const pedidoRouter = require('./ms-pedido/routes/pedidoRoute.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);
  
  next();
});

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
  res.sendFile(__dirname + "/public/catalogo.html");
});
app.use(livroRouter);
app.use(usuarioRouter);
app.use(avaliacaoRouter);
app.use(pedidoRouter);


main().catch((err) => console.log(err));

async function main() {

  await mongoose.connect(process.env.MONGO_URI);

  app.listen(process.env.PORTA, () => {
    console.log(`Aplicativo no ar na porta: ${process.env.PORTA}`)
  })
}