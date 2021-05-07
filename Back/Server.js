const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('hellos'));

app.listen(3000, ()=> {
    console.log("REST api running on port 3000");
})