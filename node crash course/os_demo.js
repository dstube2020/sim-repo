const os = require('os');
//const fs = require('fs');
//const path = require ('path');

// platform

console.log(os.platform());

// cpu architecture

console.log(os.arch());

//cpu core info

console.log(os.cpus());

// free memory
console.log(os.freemem());
// total memory
console.log(os.totalmem())
// home dir
console.log(os.homedir())
//uptime
console.log(os.uptime())