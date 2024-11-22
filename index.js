let input1 = document.querySelector("#inp1");
let input2 = document.querySelector("#inp2");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let inputs = document.querySelectorAll(".inputs input")

let login = (event) => {
  event.preventDefault();
 let sales = input1.value;
 let pass = input2.value;
  const salesIdRegex = /^\d{6,11}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/;
  let salestest = salesIdRegex.test(sales);
  let passwordtest = passwordRegex.test(pass); 

  console.log("Sales ID:", sales, "Sales ID Test:", salestest);
  console.log("Password:", pass, "Password Test:", passwordtest);

  if (salestest == true && passwordtest == true) {
    let userinfo = users.findIndex(
      (el) => el.Selesid === sales && el.password === pass
    );
    if (userinfo === -1) {
      alert("Wrong Sales ID or Password");
    
    } else {
    window.location.href = "./index2.html";
    }
   }else {
    alert("Please enter a valid Sales ID and Password format.");
  }
};


inputs.forEach((el) => {

  el.addEventListener("focus", () => {
    
    el.style.border = "1px solid #ffca40";
  });

  el.addEventListener("blur", () => {
   
    el.style.border = "none";
  });
})

