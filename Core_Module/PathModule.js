/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = require('path');

var fileHome = "Desktop/node_link.txt";

console.log(path.normalize(fileHome));
console.log(path.dirname(fileHome));
console.log(path.basename(fileHome));
console.log(path.extname(fileHome));

