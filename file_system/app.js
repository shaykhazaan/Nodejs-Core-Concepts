const fs = require("fs/promises");
// open
// read of write

(async () => {
  const commandFileHandler = await fs.open("file_system/command.txt", "r");

  commandFileHandler.on("change", async () => {
    // get size of file
    const size = (await commandFileHandler.stat()).size;
    // allocate our buffer with size of file
    const buff = Buffer.alloc(size);
    //  the location   at which we want to start our buffer
    const offset = 0;
    // how many bytes we want to read
    const length = buff.byteLength;
    // the  position we want to start reading the file  from
    const position = 0;

    // read content of the file(always from beginning)
    await commandFileHandler.read(buff, offset, length, position);

    console.log(buff.toString("utf-8"));
  });

  // watcher...
  const watcher = fs.watch("file_system/command.txt"); //watch method can watch files or whole directory

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
