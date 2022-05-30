const express = require ('express');
const path = require ('path');

const app = express ();

const amigos = [
    {id: 1,
    name: "Juan"
},
{
    id: 2,
    name: "Pedro"
}
]

app.get('/',(req, res) => {
    res.send ("Hola mundo");
})

app.get('/amigos',(req, res) => {
    res.send (amigos);
})

app.get('/index', (req,res) => {
 let htmlInfo= path.resolve(__dirname, './vistas/index.html');
 res.sendFile(htmlInfo)
})

app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"));