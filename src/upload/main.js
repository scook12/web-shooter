// get files from computer to s3 registered with filestack
const fs = require("fs");
const path = require("path");
const options = {
    accept: "image/*",
    fromSources: ['local_file_system'],
    maxSize: 1024 * 1024,
    maxFiles: 40
}
const client = require("filestack-js").init("AQULPspSe2AOj1sJQ3Shwz", options);
const local_path = "/Users/sam10266/Documents/Projects/web-shooter/src/data"

fs.readdir(local_path, function (error, files) {
    if (error) {
        console.log(error);
    }

    files.forEach(function(file, index){
        if (file.startsWith(".") ){
            console.log("Skipping invalid file type..."); // skipping .ds_store and other .sys files
            return true;
        }
        console.log(file);

        let filepath = path.join(local_path, file)
        client.upload(filepath).then(
            function(result) {
                console.log(result);
            },
            function(error){
                console.log(error);
            }
        );
    });
});
