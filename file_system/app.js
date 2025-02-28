const fs = require("fs/promises");
// open
// read of write

(async () => {
  const createFile = async (path) => {
    let existingFileHandle;
    try {
      existingFileHandle = await fs.open(path, "r");
      console.log(`The File at ${path} already exist!`);

      existingFileHandle.close();
    } catch (error) {
      const newFileHandle = await fs.open(path, "w");
      console.log("A New File was successfully created!");
      newFileHandle.close();
    }
  };

  //commands
  const CREATE_FILE = "create a file";

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

    const command = buff.toString("utf-8");

    if (command.includes(CREATE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      createFile(filePath);
    }
  });

  // watcher...
  const watcher = fs.watch("file_system/command.txt"); //watch method can watch files or whole directory

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
