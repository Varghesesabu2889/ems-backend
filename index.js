
const jsonServer =  require('json-server');
const  server = jsonServer.create();
const middleware = jsonServer.defaults() 
const router = jsonServer.router("db.json");
const  port= process.env.PORT ||  3000;

server.use(middleware);
server.use(router)

server.listen(port, ()=>{
    console.log(`employee portal start at the ${port}/`)
    })
