let input1 = document.querySelector("#inp1");
let input2 = document.querySelector("#inp2");

let login = (event) => {
  event.preventDefault();
 let sales = input1.value;
 let pass = input2.value;
  const salesIdRegex = /^\d{6,11}$/;
  const passwordRegex =/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/;
 let salestest = salesIdRegex.test(sales)
 let passtest = passwordRegex.test(pass)

  if(salestest==true&&passtest==true){
    let userinfo = users.findIndex(el=>{
       return  el.Selesid == sales && el.password == pass
    })
    
  if(userinfo==-1){
    let obj = {Selesid: sales , password : pass}
    users.push(obj) 
    alert("Registration Successful")
    window.location.href = "./index2.html";
  }else{
    alert("You already have an account go to the login page")
  }
}else{
    
  alert("Enter a valid Sales ID (6-11 numbers) and password (at least 8 characters with [a-z], numbers, and special characters [!@#$%^&*]).");}
};
