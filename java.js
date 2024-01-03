let login_Users = [
    {
    username: "user1", pass: "pass123", age: 25, gender: "male", phone: "123-456-7890"
    },
    {
    username: "user2", pass: "abc456", age: 30, gender: "female", phone: "987-654-3210"
    }
   ];
function onenterr(){
    var username1=document.getElementById('Susername').value ;
    var pass1=document.getElementById('spass').value ;
    var email=document.getElementById('email').value ;
    var phone =document.getElementById('phonenum').value ;
    var age =document.getElementById('age').value ;
    var cpas=document.getElementById('confirmpass').value
    let userA=login_Users.some(login_Users=> login_Users.username ==username1);
 

    if(username1==""||pass1==""||email==""||phone==""||age==""){
        alert("enter unfilled text")
    }
   
    else if(phone.lenght<11. || phone.lenght>11){
        alert("enter only 11");
    }
    else if(age<18 || age>60){
        alert("enter between 18to60"); 
    }
    
     else if(pass1.lenght!==cpas.lenght){
    alert("enter equal pass"); 
   }
   else {
    var obj={username:username1 ,pass:pass1}
    login_Users.push(obj);
    console.log(login_Users);
    alert("Added succefuly");
   }
}
function cli(){
 var lusername=document.getElementById('lusername').value
 var lpass=document.getElementById('lpassword').value
if(lusername ===""||lpass===""){
    alert("invalled")
}

 for(let i=0;i<login_Users.value;i++){
  if(login_Users[i].username===lusername.value && login_Users[i].pass===lpass.value){
    alert("welcome")
    location.href="index.html";
    console.log
  }else{
    alert("try again with another username or pass");
}
 }
 function clli()
 {
    var lusername=document.getElementById('lusername').value
    var lpass=document.getElementById('lpassword').value
    for(let i=0;i<login_Users.value;i++){
        if(login_Users[i].username==lusername.value){
         login_Users[i].pass==lpass;
         alert("changed");
        }
        else{
            alert("try again");
        }

 }
 
 }
}

