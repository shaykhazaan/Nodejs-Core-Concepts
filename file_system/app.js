const fs = require("fs/promises");

(async () => {
  const watcher = fs.watch("file_system/command.txt"); //watch method can watch files or whole directory

  for await (const event of watcher) {
    if (event.eventType === "change") {
      // the file has changed
      console.log("The file has changed.");
    }
  }
})();
