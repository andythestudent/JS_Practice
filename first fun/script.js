alert("Hello");

function isEven(x) {
    if (x % 2 === 0) {
        console.log("True");} 
    else (x % 2 !== 0) 
    {console.log("False");}
}

// function factorial(y) {
//     return (x * x) * (x-1)
//     return x * 
// } 

function factorialize(num) {
  
    var result = num;
    if(num ===0 || num===1){
      
      return 1;
    }
    
    while(num > 1){
      num--;
      result =num*result;
    }
    return result;
  }

function kebab(str) {
    if (str.regExp(-) 
}