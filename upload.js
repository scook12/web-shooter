// this module watches a directory for new and automatically uploads images from 
// local storage to an s3 bucket registered with filestack

const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const log = console.log.bind(console);

// initialize filestack
const options = {
    accept: "image/*",
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 40
}
const client = require("filestack-js").init("AQULPspSe2AOj1sJQ3Shwz", options);
const local_path = "/Users/sam10266/Documents/Projects/web-shooter/data" // should be extracted to config

// initialize watcher
const watcher = chokidar.watch(local_path, {
    persistent: true,
    ignoreInitial: true
});

// handle events
watcher
  .on("add", (filepath, stats) => {
      log("New file(s) detected...");
      if (filepath.startsWith(".") ){
          return true; // skipping .ds_store and other . files
      }
      log("Uploading file: ", filepath);
      client.upload(filepath).then(
        function(result) {
            console.log(result);
        },
        function(error){
            console.log(error);
        }
    );
    watcher.unwatch(filepath);
});