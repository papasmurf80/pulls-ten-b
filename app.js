
const request = require('request');
const fileName = require('fs');

let tenSites = ["www.google.com", "www.yahoo.com", "www.yamahamotorsports.com"];
// Loop through array of sites. For each iteration, create a new file/name(createWriteStream destination). 



for (let i = 0; i < tenSites.length; i ++){
    request.get("http://"+tenSites[i], function(error, response, body){ //The request - loops through array of websites
        fileName.createWriteStream("file" + i + ".html");//Writes files to subfolder
        console.error('error:', error); //Prints error if one is thrown
        console.log(i + "this works");//Provides reassurance
    });
};

