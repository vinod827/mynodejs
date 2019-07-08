const http = require('http');
const usercreation = require('./user-creation');

console.log(usercreation.someExtraText);
const server = http.createServer(usercreation.requestHandler);
server.listen(8090);