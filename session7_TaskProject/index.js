const app=require("./app/server")
const Port=process.env.PORT || 3000
app.listen(Port, ()=> console.log(`http://localhost:${Port}`))