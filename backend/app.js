 const express = require('express');

 const PORT = normalizePort(process.env.PORT || '5000');
 const app = express();


 app.get('/', (req, res, next) =>  {
    res.se
 })

 app.listen(PORT, () => {
     console.log('Server Start On Port '+ PORT);
 });