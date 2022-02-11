/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

*/
require('dotenv').config()
const server = require('./api/server.js')
const port = 9000

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });