Problem 1: If the number is divisible by 3, print a "multiple of 3".
sol:let number=15;
if(number%3==0){
  console.log("multiple of 3")
}

Problem 2: If a person is allowed to drive in India print "Apply for a license" or "NA".
sol:let age=22;
if(age>=18){
  console.log("apply for a license");
}
else{
  console.log("NA");
}

Problem 3: Given 2 numbers a and b print which is greater or "both equal".
sol:let a=3,b=6;
if(a>b){
  console.log("a is greater");
}
else if(b>a){
  console.log("b is greater");
}
else{
  console.log("both equal");
}

Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
sol:let suser_name="naruto",spassword="boruto";
let euser_name="asta",epassword="blackclover";
if(euser_name===suser_name){
  if(epassword===spassword){
    console.log("user can login");
  }
  else{
    console.log("check password");
  }
}
else{
  console.log("cannot login or check username");
}
