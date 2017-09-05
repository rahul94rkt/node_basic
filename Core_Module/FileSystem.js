/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fs = require('fs');

fs.writeFileSync("./Core_Module/Cron.txt","Cron job is good");
console.log(fs.readFileSync('./Core_Module/Cron.txt')+toString());

