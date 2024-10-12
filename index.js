
const express = require('express');
const rotaUsuario = require('./rotas/usuario.rota')
const rotaPost = require('./rotas/posts.rota')
const rotaProduto = require('./rotas/produtos.rota')

const app = express();

app.use(express.json());
app.use('/usuario', rotaUsuario)
app.use('/posts', rotaPost)
app.use('/produto',rotaProduto )

app.get('/',(req,res) => {
    res.status(400).send('Sem arquivos ou path errado');
})


app.listen(8080,() => {
    console.log('Servidor de porta 8080')
})