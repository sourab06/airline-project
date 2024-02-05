const { serverconfig,logger } =require('./config');
const express=require('express');
const app= express();
const apiRoutes=require('./routes');

app.use('/api',apiRoutes);

app.listen(serverconfig.PORT,() =>{
    console.log("started the server on port:",serverconfig.PORT);
    //logger.info("started server successfully ",{})
});
