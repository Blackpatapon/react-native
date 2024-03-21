const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

var cors = require('cors');
app.use(cors({origin: true, credentials: true}));

mongoose.connect('mongodb://localhost:27017/bd_car', {
    // useNewParser: true,
    // useUnidefiedTopology: true
});

const Schema = mongoose.Schema;
const miSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
})
const MiModelo = mongoose.model('Modelo', miSchema);

app.get('/datos',async(req,res)=>{
    try{
        const datos = await MiModelo.find();
        res.json(datos);
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Error en el servidor'});

    }
});

app.post("/Register", async (req, res) => {
    username = req.body.username;
    email = req.body.email;
    password = req.body.password;

    console.log(username,email,password);
    res.send(username,email,password)
})

app.listen(PORT, () => {
    console.log(`Servidor en ejecucion en http:localhost:${PORT}`);
});
