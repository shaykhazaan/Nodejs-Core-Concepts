const fs = require("fs/promises");
// open
// read of write

(async () => {
  const commandFileHandler = await fs.open("file_system/command.txt", "r");

  const watcher = fs.watch("file_system/command.txt"); //watch method can watch files or whole directory

  for await (const event of watcher) {
    if (event.eventType === "change") {
      // the file has changed
      console.log("The file has changed.");

      // get size of file
      const size = (await commandFileHandler.stat()).size;

      // read content of the file
      const content = await commandFileHandler.read();
      console.log("commandFileHandler CONTENT::: \n", content);
    }
  }
})();
