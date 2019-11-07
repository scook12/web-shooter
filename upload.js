// this module watches a directory for new and automatically uploads images from 
// local storage to an s3 bucket registered with filestack

const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const express = require("express");
const app = express();
const session = require("express-session");
const log = console.log.bind(console);

// initialize app
app.use(session({secret:"super_secret_key"}));

// initialize filestack
const options = {
    accept: "image/jpg",
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 40
}
const client = require("filestack-js").init("AQULPspSe2AOj1sJQ3Shwz", options);
const local_path = "/Users/sam10266/Documents/Projects/web-shooter/data" // should be extracted to config

// initialize watcher
const watcher = chokidar.watch(local_path, {
    persistent: true,
    ignoreInitial: false
});

const handles = [];

// handle events
watcher
  .on("add", (filepath, stats) => {
      log("New file(s) detected...");
      if (filepath.startsWith(".") ){
          log("Skipping invalid file...");
          return true; // skipping .ds_store and other . files
      }
      log("Uploading file: ", filepath);

      client.upload(filepath).then(
        function(result) {
            log(result);
            handles.push(result["handle"]);
        },
        function(error){
            log(error);
        }
    );
    watcher.unwatch(filepath);
});

async function storeHandles(req, res, next){
    if (handles) {
        req.session.handles = handles;
    }
    res.redirect('/gallery')
}

module.exports = {storeHandles}