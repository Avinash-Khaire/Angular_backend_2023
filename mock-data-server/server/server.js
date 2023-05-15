const jsonSERVER = require('json-server');
const middleware = jsonSERVER.defaults();//default middleware is set up using the jsonSERVER.defaults() function.
const server = jsonSERVER.create();//a new instance of the server is created using jsonSERVER.create()

server.use(middleware);//method is used to add middleware to the server instance
server.use(jsonSERVER.bodyParser);//middleware is added to enable parsing of JSON data in the request body.

const userData = require('../server/data/users');


server.get('/api/users', (req, res, next) => {
  const usersData = userData.getUsersData(); // Call the getUsersData function correctly
  res.status(200).json(usersData);
});
server.post('/api/users', (req, res, next) => {
    const newUser = req.body;
    res.status(201).json(newUser);
  
    const users = userData.getUsersData(); // Call the getUsersData function correctly
    users.push(newUser);
  });
  

server.listen(3000,()=>{
    console.log("Json Server Listening On Port :3000")
})