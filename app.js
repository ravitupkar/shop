 const express = require('express');

 const PORT = process.env.PORT || 5000;
 const app = express();

 app.get('/', (req, res, next) => {
    res.json("Hello");
 });

 app.listen(PORT, () => {
     console.log('Server Start On Port '+ PORT);
 });