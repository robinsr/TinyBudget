var app = require('./budgetapp');
var http = require('http')
var port = process.env.PORT || 3000;

http.createServer(app).listen(port);
console.log('Prod - listening on ' + port);