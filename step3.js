// const fs = require("fs");
// const axios = require("axios");

// function cat(path) {
//   fs.readFile(path,"utf8", function(err,data){
//     if (err) {
//       console.log(`Error reading ${path}: ${err.message}`);
//       process.exit(1);
//     } else {
//       // console.log(data);
//       return data
//     }
//   })
// }

// async function catURL(URL) {
//   try{
//   let response = await axios.get(URL);
//   // console.log(repsonse.data)
//   return response.data
  
//   } catch(error) {
//     console.log(`Error fetching URL: ${error}`)
//   }
// }

// argument = process.argv[2]


// function copyFile(newfilename, originaldata){
//     fs.writeFile(newfilename, originaldata, 'utf8', function(err){
//       if (err) {
//         console.log(`Couldn't write ${originaldata} on ${newfilename}:
//         ${error.message}`);
//         process.exit(1);
//       } else {
//         console.log(`successfully created ${newfilename}`)
//       }
//     })
  
// }

// if (argument === "--out"){
//   copyFile(process.argv[3], testing(process.argv[4]));
// } else {
//   testing(argument)
// }

// function testing(argument){
//   if (argument.startsWith("http")){
//     console.log(catURL(argument));
//   } else {
//     console.log(cat(argument));
//   }
// }

const fs = require("fs");
const axios = require("axios");

function cat(path, newfilename) {
  fs.readFile(path,"utf8", function(err,data){
    if (err) {
      console.log(`Error reading ${path}: ${err.message}`);
      process.exit(1);
    } else {
      if (newfilename){
        return copyFile(newfilename, data);
      } else {
        console.log(data);
      }
    }
  })
}

async function catURL(URL, newfilename) {
  try{
  let response = await axios.get(URL);
    if (newfilename){
      return copyFile(newfilename, response.data);
    } else { 
      console.log(response.data);
    }
  } catch(error) {
    console.log(`Error fetching URL: ${error}`)
  }
}

function copyFile(newfilename, originaldata){
    fs.writeFile(newfilename, originaldata, 'utf8', function(err){
      if (err) {
        console.log(`Couldn't write ${originaldata} on ${newfilename}:
        ${error.message}`);
        process.exit(1);
      } else {
        console.log(`successfully created ${newfilename}`)
      }
    })
  
}

argument = process.argv[2]
let newfilename;

if (argument === "--out"){
  newfilename = process.argv[3];
  argument = process.argv[4];
} 

if (argument.startsWith("http")){
    catURL(argument, newfilename)
  } else {
    cat(argument, newfilename)
}