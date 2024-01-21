const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 5050;

routerApi(app);

app.listen(port, ()=>{
    console.log("my port is " + port);
});
