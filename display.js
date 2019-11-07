// retrieve all images for the gallery

const session = require("express-session");
const log = console.log.bind(console);
const options = {
    accept: "image/*",
    maxFiles: 1
}
const client = require("filestack-js").init("AQULPspSe2AOj1sJQ3Shwz", options);

// https://spider-s3.s3.us-east-2.amazonaws.com/0V561zzCQ1K9ejHrtP0K_different.png

async function getPictures(req, res, next) {
    const {handles} = req.session.handles
    handles.array.forEach(element => {
        client.retrieve(element, {
            metadata: true
        }).then((res) => {log(res["response"]);}
        ).catch((err) => {log(err["response"]);
    })
    });
    client.retrieve()
}
// client.retrieve("*", {
//     metadata: true
// }).then((response) => { log("Single Response:", response["response"]); }
// ).catch((err) => {
//     log(err["response"]);
// });