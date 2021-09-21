const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // punto 4, para poder acceder desde el browser a todos los archivos 

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.listen(3030, () => console.log('levantaste el server con exito'));