const { Buffer, constants } = require("buffer");

// const buff = Buffer.alloc(1e9); //1,000,000,000 bytes (1GB)
const buff = Buffer.alloc(0.5e9);

console.log(constants.MAX_LENGTH);

setInterval(() => {
  // for (let i = 0; i < buff.length; i++) {
  //   buff[i] = 0x22;
  // }

  buff.fill(0x22);
}, 5000);
