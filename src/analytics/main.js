// logic for filestack analytics

// get the metadata for the image

// export the metadata (as json?)
const fs = require("fs");
const filestack = require("filestack-js");
const client = filestack.init("AQULPspSe2AOj1sJQ3Shwz");
const local_path = "/Users/sam10266/Documents/Projects/web-shooter/src/data/new.png"

// get all the files from the folder uploaded then delete them, unless
// fs.readdir(local_path, function (err, files) {
//     if (err) {
//         console.log("Error uploading the file, yo.");
//         process.exit(1);
//     }
//     files.forEach(function (file, index) {
//         client.upload(file).then(
//             function(result) {
//                 console.log(result);
//                 fs.unlinkSync(file);
//         },
//             function(err) {
//                 console.log(result);
//         })
//     });
// });
client.upload(local_path).then(
    function(result) {
        console.log(result)
    }
);
