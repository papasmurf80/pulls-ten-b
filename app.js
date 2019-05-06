const request = require('request');
const fileName = require('fs');

let tenSites = ["www.google.com", "www.yahooo.com"];
// Loop through array of sites. For each iteration, create a new file/name(createWriteStream destination). 

request.get("http://www.google.com", function (error, response,body){
    console.error("error:", error);
    console.log(i + "request successful")
})

// for (let i = 0; i < tenSites.length; i ++){
//     request.get(tenSites[i], function(error, response, body){
//         fileName.createWriteStream("file" + i + ".html");
//         console.error('error:', error); //Prints error
//         console.log(i + "this works");
//         //console.log("body:", body); //prints HTML to console
//     }
// };


// The request 



// --------------

// Moves files to subfolder 
// --------------

// Custom npm command
// --------------