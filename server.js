// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
    if (req.method === 'POST' || req.method === 'GET' ) {
        await enteringInToTheBlackHole(1500);
    }
    next()
});
server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running')
});

function enteringInToTheBlackHole(ms) {
    // Método para simular una demora de una consulta real.
    return new Promise(resolve => setTimeout(resolve, ms));
}
