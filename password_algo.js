var http = require('http');
var checkPassStrength = function (password, strengthLevel) {
    
    password="abc@123"
    let score=0;

    var regex = new Array();
    regex.push("[A-Z]"); //For Uppercase Alphabet
    regex.push("[a-z]"); //For Lowercase Alphabet
    regex.push("[0-9]"); //For Numeric Digits
    regex.push("[$@$!%*#?&]"); //For Special Characters

    for (var i = 0; i < regex.length; i++) {
        console.log("test--------",new RegExp (regex[i]).test(password));
        if((new RegExp (regex[i])).test(password)){
        score++;
    }
    }
    if(password.length == 0){
        console.log("Please enter the password!");
        return;
    }
    if(score==0){
        return;
    }

    if(score==1 || password.length < 8){
        console.log("Password is weak!")
        score= score - 1;
        return score;
    }
    
    if(score==2 || (password.length > 8 && password.length < 16)){
        console.log("Password is average!");
        score = score + 1;
        return score;
    }
    if(score==4){
        console.log("Password is good!");
        score = score + 1;
        return score;
    }
    if(score==5 || (password.length > 16)){
        console.log("Password is strong!");
        score = score + 1;
        return score;
    }

}
checkPassStrength();



// var http = require('http');

// // http.createServer(function (req, res) {
// //   //res.writeHead(200, {'Content-Type': 'text/html'});
// //   //res.end('Hello World!');
// // }).listen(8080);

// var checkPassStrength = function (password, strengthLevel) {
//     strengthLevel="Medium"
//     password=""
   
//     // let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
//     // let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

//     if(password.length==0){
//         console.log("Please enter the password")
//         return;
//     }
   
//     var regex = new Array();
//     regex.push("[A-Z]"); //For Uppercase Alphabet
//     regex.push("[a-z]"); //For Lowercase Alphabet
//     regex.push("[0-9]"); //For Numeric Digits
//     regex.push("[$@$!%*#?&]"); //For Special Characters

//     var countLevel = 0;

//     //Validation for each Regular Expression
//     for (var i = 0; i < regex.length; i++) {
//         if((new RegExp (regex[i])).test(password)){
//             countLevel++;
//         }
//     }

//     //Validation for Length of Password
//     if(countLevel > 2 && password.length > 8){
//         countLevel++;
//     }
//     //var passwordStrength = "";
//     switch(countLevel){
//         case 0:
//             break;
//         case 1:
//             strengthLevel = "Password is Weak.";
//             console.log(strengthLevel);
//             break;
//         case 2:
//             strengthLevel = "Password is Good.";
//             console.log(strengthLevel);
//             break;
//         case 3:
//                 break;
//         case 4:
//             strengthLevel = "Password is Strong.";
//             console.log(strengthLevel);
//             break;
//         case 5:
//             strengthLevel = "Password is Very Strong.";
//             console.log(strengthLevel);
//             break;
//     }
   
// }
// checkPassStrength();
