const { Buffer } = require("buffer");

const memContainer = Buffer.alloc(4); // 4 bytes (32 bits)

memContainer[0] = 0xf4; //hexadecimal value
memContainer[1] = 0x34;
memContainer[2] = 0x00;
memContainer[3] = 0xff;

console.log(memContainer);
console.log(memContainer[0]); //prints deciamal value for certain index
console.log(memContainer[1]);
console.log(memContainer[2]);
console.log(memContainer[3]);

console.log(memContainer.toString("hex"));
