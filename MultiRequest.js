/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function orders(number){
    console.log("Order number : "+number);
    myCollbackfunction(function(){
        console.log("Delever order number : "+number);
    });
}

function myCollbackfunction(callback){
    setTimeout(callback,5000);
}


orders(1);
orders(2);
orders(3);
orders(4);
orders(5);
orders(6);


