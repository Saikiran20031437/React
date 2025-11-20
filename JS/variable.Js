//  //var
       var a = 10;
      console.log(a); //10
      //re-declare
      var a = 20;
      console.log(a);//20
      //re-assign
      a = 30;
      console.log(a);//30

      //function scope
      function E() {
        var z = 10;
        console.log(z);//10
      }
      E();

//let
 let b = 10;
 console.log(a);//10
 //we cant redeclare
 //re assign
 b = 30;
 console.log(a);
 //block scope
 {
    let c = 100;
    console.log("value of b is " + b);
    document.writeln("value of b is " + b);
 } 

 //constant

 const pi = 3.14;
 console.log(pi);

 //pi = 889.99
 //we cant re declare
 //cant re assign

 //block scope

 {
    const b = 3.46;
    console.log(b);
 }

