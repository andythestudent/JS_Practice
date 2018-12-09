alert("He, du");
var vorname = prompt("Wie lautet dein Vorname?");
var nachname = prompt("Und dein Nachname?");
var name = vorname.substring(0,1).toUpperCase() + vorname.substring(1).toLowerCase() + " " + nachname.substring(0,1).toUpperCase() + nachname.substring(1).toLowerCase();
// name.toUpperCase();
alert("Du bist also " + name + ".");
var alter = Number(prompt("Wie alt bist du eigentlich?", ""));
//Number(prompt("Gib eine Zahl ein", ""));
if(alter<=4){
    alert("Wow, du kannst schon lesen.")
}
else if(alter<=10){
    alert("Na, das ist schön.")
}
else alert("Alter, dann wirst du ja nächstes Jahr " + (alter + 1));

alert("Und du bist ungefähr " + alter*365.25 + " Tage alt. Das ist ganz schön viel!");

console.log();


// var age = prompt("Wie alt bist du?");
// var days = age + 2;
// alert("You are not " + days);
// var age = Number(prompt("What is your age", ""));

// if(age<0){
//     console.log("Error");
// }
// if(age===21){
//     console.log("Happy 21st Birthday!");
// }
// if((age % 2) !=0){
//     console.log("your age is odd");
// }
// if(age % Math.sqrt(age)===0){
//     console.log("Your a perfect square");
// }