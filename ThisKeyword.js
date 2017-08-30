/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Rahul = {
    printMyName:function(){
        console.log('My name is rahul');   //true
        console.log(this === Rahul);
    }
};
Rahul.printMyName();

// The default calling context is global
function doSomethingElse(){
    console.log("This is global");
    console.log(this === global);
}

doSomethingElse();
