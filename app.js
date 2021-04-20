const app = require("./config/server");
const socketIO = require('socket.io');

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running... 🚀`);
})

socketIO.listen(server);