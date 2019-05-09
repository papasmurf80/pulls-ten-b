const request = require('request');
const fileName = require('fs');

let tenSites = ["www.google.com", "www.yahoo.com"];
// Loop through array of sites. For each iteration, create a new file/name(createWriteStream destination). 

function testRun(){
    console.log("test run")
};

testRun(); 

// request.get("http://www.google.com", function (error, response,body){
//     console.log("request ran")
//     console.error("error:", error);
//     console.log("body:", body)
// });

for (let i = 0; i < tenSites.length; i ++){
    request.get("http://"+tenSites[i], function(error, response, body){
        fileName.createWriteStream("file" + i + ".html");
        console.error('error:', error); //Prints error
        console.log(i + "this works");
        //console.log("body:", body); //prints HTML to console
    });
};


// The request 



// --------------

// Moves files to subfolder 
// --------------

// Custom npm command
// --------------