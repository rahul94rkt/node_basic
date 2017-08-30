/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rahul = {
    favShow:"GOT",
    favMovie:"Sci-Fi"
}
//here person getting referencing of rahul ... not coping the rahul. 
var person = rahul;
person.favShow = "DBG";  // it's a refernence of rahul so if we change person favShow it will change rahul's also

console.log(rahul.favShow);

