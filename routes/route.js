
module.exports = (app)=>{
    app.use((req, res, next)=>{
        console.log("req");
        next();
    })
    .route('/router')
    .get((req, res)=>{
        res.send("get api from router");
    });
}