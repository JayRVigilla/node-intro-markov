const fs = require("fs");
const axios = require("axios");


function cat(path) {
  fs.readFile(path,"utf8", function(err,data){
    if (err) {
      console.log(`Error reading ${path}: ${err.message}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  })
}

// function catURL(URL) {
//     let responsePromise = axios.get(URL);
//     responsePromise
//       .then(data => console.log(data.data))
//       .catch(err => `Error fetching ${URL}: ${err.message}`)
// }

async function catURL(URL) {
  try{
  let response = await axios.get(URL);
  console.log(repsonse.data)
  } catch(error) {
    console.log(`Error fetching URL: ${error}`)
  }
}

argument = process.argv[2]

if (argument.startsWith("http")){
  catURL(argument);
} else {
  cat(argument);
}
