import serverVariables from './server/server.js'

serverVariables.server.listen(serverVariables.port, () => {
    console.log(`Live on ${serverVariables.port} !!!`)
});