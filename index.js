const express = require('express'); //Line 1
const port = process.env.PORT || 5000; //Line 3
// const io = require('socket.io')(port)
// const { ExpressPeerServer } = require('peer')
// const peerServer = ExpressPeerServer(port, {
// 	debug: true,
// })
// const { v4: uuidv4 } = require('uuid')
const app = express(); //Line 2

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'The Duy' }); //Line 10
}); //Line 11