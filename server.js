const express = require('express');
const route = require('./routes/route');
const routes = require('./routes/routes');
const app = express();
const PORT = 3000;

app.use((req, res, next)=>{
    console.log('LOGGED');
    next();
});

//Different ways for defining routes
/**
 * 1. Register routes on the app instance in main(e.g., index.js or server.js) module
 * -overload main module
 * -difficult to maintain
 */
app.get('/', (req, res)=>{
    res.send("get api on app");
});

/**
 * 2. Register routes on app instance in a separate module
 * -a route specific module can add middleware which will impact all apis 
 */
route(app);

/**
 * 3. Register routes on Router instance in a separate module
 * -gives modularity
 * -easy to manage
 * -route specific middleware can be added
 * -will not impact app instance 
 */
app.use('/', routes);

app.listen(PORT, ()=>{
   console.log(`
   *******************************
   *******Server Started!!!*******
   *********PORT ${PORT}**********
   *******************************
   `);
});

