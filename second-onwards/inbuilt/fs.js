let fs = require("fs");
// fs.writeFile("alll.txt", "this is fs package", function () {
//   console.log("file Created");
// });
// // this function is triggererd
// fs.appendFile("alllone.txt", "this file is for node \n ", function () {
//   console.log("file appended");
// });

// read file
fs.readFile("alll.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
  //   data is encryoted
  //   if the data in the form of json we replaced alll.txt with db.json
});

// delete file
fs.unlink("alll.txt", function (err) {
  if (err) throw err;
  console.log("file deleted");
  // even the file name is wrong the compiler giving the meg is file deleted
});

fs.rename("alll.txt", "tall.txt", function (err) {
  if (err) throw err;
  console.log("file rename");
});
