var name=prompt("Enter Your Name");
var gender=prompt("Enter Your Gender");
if (gender=="Male"||"Female") {
    gender=gender;
}  
    else{
        alert("input is invalid");
    };
var age=prompt("Enter Your age");
if (age>0) {
    age=age;
} else {
    alert("age is under zero");
}
var con= confirm("Do you want to skip the welcoming message");
if (con=="True") {
    Break;
} else {

if (gender=="Male") {
    alert("Hello Mr");
} else {
    if (gender=="Female") {
        alert("Hello Ms");
    } else {
        alert("Hello");
    }
}
}
var arr=[];
var answerOne= confirm("Are you a robot?");
if (answerOne=="True") {
    answerOne=answerOne;
} else {
    answerOne="invalid";
}
arr.push(answerOne);

var answerTwo= confirm("Are you a blind?");
if (answerTwo=="True") {
    answerTwo=answerTwo;
} else {
    answerOne="invalid";
}
arr.push(answerTwo);

var answerThree= confirm("Are you a serious?");
if (answerThree=="True") {
    answerThree=answerThree;
} else {
    answerThree="invalid";
}
arr.push(answerThree);

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}