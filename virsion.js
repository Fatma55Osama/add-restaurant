let div_allbtn = document.querySelectorAll("#allbtn button");
let activeDive = document.querySelector("#Category");
let table = document.querySelector("table tbody");
let totalspan = document.querySelector("#total");
let verg = document.querySelector("#verg");
let verg2 = document.querySelector("#verg2");

let itemsearch =document.querySelectorAll("#Category button")

// function cat_on(index) {
//   activeDive[index].style.backgroundColor = "#ffc107";
// }
// function cat_leav(index) {
//  activeDive[index].style.backgroundColor = "white";
// }

let cats = Object.keys(products);

let renderCats = () => {
  activeDive.innerHTML = "";
  cats.forEach((el, index) => {
    let sectionImage = products[el].find(
      (item) => item.name === "sectionimg"
    ).img;

    activeDive.innerHTML += `<button onmouseenter="this.style.backgroundColor = '#ffc107'" onmouseleave="this.style.backgroundColor = 'white'" class=" d-flex flex-column align-items-center align-content-around mb-4 mt-3" onclick="renderProduct('${el}')"><img src='${sectionImage}'>${el}</button>`;
    verg.innerHTML = "Categories";
    verg2.innerHTML = "Categories";
  });
};

renderCats();

let renderProduct = (catName) => {
  activeDive.innerHTML = "";
  products[catName].forEach((el, index) => {
    if (el.name !== "sectionimg") {
      activeDive.innerHTML += `
        <div class="card mb-3" style="width: 18rem;" onmouseenter="this.style.backgroundColor = '#ffc107'" onmouseleave="this.style.backgroundColor = 'white'">
           <img src="${el.img}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${el.name}</h5>
                 <p class="card-text">${el.price} $</p>
                 <a href="#" class="btn btn-primary 
                    type="button"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"" onclick="addproduct('${catName}',${index})">Add To Card</a>
            </div>
        </div>`;
      verg.innerHTML = `${catName}  <img src="${products[catName][0].img}" width="50px" height="50px">`;
      verg2.innerHTML = `${catName}`;
    }
  });
};
renderCats();

let gettotal = () => {
  let total = categories.reduce((acc, el) => {
    let final = el.price * el.qty;
    return acc + final;
  }, 0);
  console.log(total);
  totalspan.innerHTML = total;
};
gettotal();

let renderfatora = () => {
  table.innerHTML = "";
  categories.forEach((el, index) => {
    table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${el.name}<img class="ms-2" src="${
      el.img
    }" width="50px" height="50px"></td>
          <td>${el.price} $</td>
          <td><button class="btn btn-danger" onclick="decrease(${index})">-</button>${
      el.qty
    }<button class="btn btn-success" onclick="increase(${index})">+</button></td>
          <td>${el.price * el.qty} $</td>
        </tr>`;
  });
  gettotal();
};
renderfatora();

let addproduct = (catName, index) => {
  let product = { ...products[catName][index], qty: 1 };
  // product.qty = 1;
  let i = categories.findIndex((el) => el.name == product.name);
  if (i == -1) {
    categories.push(product);
  } else {
    categories[i].qty++;
  }

  renderfatora();
};
let decrease = (index) => {
  if (categories[index].qty > 1) {
    categories[index].qty--;
  } else {
    categories.splice(index, 1);
  }
  renderfatora();
};

let increase = (index) => {
  categories[index].qty++;
  renderfatora();
};

let searchitem=(event)=>{
  let inputSearch = event.target.value.trim().toLowerCase(); 
  let filtered = products.filter((el)=>{
    return el.name.trim().toLowerCase().indexOf(inputSearch) !== -1;
 })
  console.log(filtered); 

  let productList = document.getElementById("productList");
    productList.innerHTML = ''; // إعادة تعيين القائمة

    filtered.forEach(product => {
      let li = document.createElement('li');
      li.textContent = `${product.name} - $${product.price}`;
      productList.appendChild(li);
    });
}
