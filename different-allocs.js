const { Buffer } = require("buffer");

const buff = Buffer.alloc(10000); //assigns empty address space

const unsafeBuffer = Buffer.allocUnsafe(10000); // assigns random address, that may contatin previous data from any application, not good from security perspective, but is faster then alloc method.

// Buffer.from();
// Buffer.concat();

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(
      `Element at position ${i} has value: ${unsafeBuffer[i].toString(2)}`
    );
  }
}

console.log(Buffer.poolSize);
console.log(Buffer.poolSize >>> 1); // binary division -shifting
