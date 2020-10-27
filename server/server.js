const path = require("path"),
  fs = require("fs");

let chirpObjects = [
  "This is a chirp",
  "This is also a chirp",
  "This, too, is a chirp",
  "What is this? Another chirp",
  "One last chirp for me.",
];

let writepath = path.join(_dirname, "../chrips.json");
chirpObjects = JSON.stringify(chirpObjects);

fs.writeFile(writePath, JSON.stringify(chirpObjects), => {
fs.readFile(writePath, (err,data) => {
    if(err) {
        console.log(err)
    }
})
});