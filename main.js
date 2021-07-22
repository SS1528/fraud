console.log("JS Loaded");
var blacklist=["fraud@yahoo.com", "hack@gmail.com", "hacker@gmail.com"];
console.log(blacklist);
console.log(blacklist.length);

var status = "safe";
console.log(status);


function check() {
  var email = document.getElementById("email").value;
  console.log("Email - ",email);
  var test = 0;
  console.log("Test - ", test);

for(var i = 0; i < blacklist.length; i++){
  if(blacklist[i] == email){
    console.log(status);
    console.log("blacklist email = ",blacklist[i]);
    console.log("written email = ",email);
    console.log(i);
    var status = "notsafe";
    console.log(i, status);
    document.getElementById("result").innerHTML = "not safe";
  }else{
    var status="safe";
    console.log(i, status);
    test = test + 1;
    console.log("Test - ", test);
    if(test == 3){
      document.getElementById("result").innerHTML = "safe";
    }
  }
    }
   }
 