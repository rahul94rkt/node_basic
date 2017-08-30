/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function User(){
    this.name = "";
    this.life = 100;
    this.gievLife = function(targetLife){
        targetLife.life += 1;
        console.log(this.name+" gave 1 his life to "+targetLife.name);
    }
}

var rahul = new User();
var pooja = new User();

rahul.name = "Rahul";
pooja.name = "Pooja";

rahul.gievLife(pooja);
console.log("Rahul : "+rahul.life);
console.log("Pooja : "+pooja.life);

User.prototype.upperCut = function upperCut(targetLife){
        targetLife.life -= 3;
        console.log(this.name+" uppercut to "+targetLife.name);  
}

pooja.upperCut(rahul);
console.log("Rahul : "+rahul.life);
console.log("Pooja : "+pooja.life);

User.prototype.magic = 50;
console.log(rahul.magic);
console.log(pooja.magic);
