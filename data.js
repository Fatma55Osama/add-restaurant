let products = {
  ColdDrinks: [
    {name:"sectionimg", img:"./photo/Layer 3.png"},
    { name: "Fresh Orang Juices", price: 50,img:"./photo/R.jpeg" },
    { name: "Water", price: 5 ,img:"./photo/water.jpeg" },
    { name: "V7-Cola", price: 30 ,img:"./photo/v7cola.jpeg"  },
    { name: "Chilled Chocolate Milk", price: 100,img:"./photo/Chilled Chocolate Milk.avif" },
    { name: "ice coffee", price: 120,img:"./photo/cccccco.webp "},
    { name: "Mojito", price: 80,img:"./photo/image-mojito-cocktail-glass-with-white-background_1033750-475.avif"}
  ],

  Burgers:[
    {name:"sectionimg", img:"./photo/Layer 1.png"},
   {name: "Cheeseburger",price: 150,img:"./photo/—Pngtree—burger food png free download_13329458.png"},
   { name: "Chicken-Deluxe", price: 200 ,img:"./photo/Quarter-Pounder-BLT.webp"},
   { name: "Hamburger", price: 180 ,img:"./photo/Mcdonalds-double-quarter-pounder-nocheese-blt.webp"},
   { name: "Big John", price: 220,img:"./photo/pngtree-chicken-burger-with-lettuce-png-image_14542361.png" },
   { name: "Spicy Chicken", price: 250,img:"./photo/Galbi-480x275-min.png" },
   { name: "Superstars", price: 280,img:"./photo/OIP.jpeg"  }],
  
 Pizza:[
  {name:"sectionimg", img:"./photo/Layer 2.png"},
  { name: "Smoky Cheese", price: 200,img:"./photo/pngtree-a-pepperoni-pizza-with-white-background-flat-lay-shot-png-image_12899139.png" },
  { name: "Fresh Mushroom", price: 220,img:"./photo/fresh.webp" },
  { name: "Mixed Cheese", price: 230,img:"./photo/mixedcheese.png"  },
  { name: "Blue Cheese", price: 180,img:"./photo/1648793712-chicken-tikka.jpg" },
  { name: "Funghi Ranch", price: 250,img:"./photo/ranch.jpeg" },
  { name: "Margherita", price: 200,img:"./photo/maro).jpeg" }],
 
 Wok:[ 
  {name:"sectionimg", img:"./photo/Layer 4.png"},
  { name: "Stir-Fried Vegetables", price: 150,img:"./photo/wok11.jpeg" },
  { name: "Kung Pao Chicken", price: 180,img:"./photo/wok7.png" },
  { name: "Szechuan Shrimp", price: 200,img:"./photo/wok2.avif"},
  { name: "Egg Foo Young", price: 250,img:"./photo/wok4.png" },
  { name: "Vegetable Chow Mein", price: 270,img:"./photo/wok3.avif" },
  { name: "General Tso’s Chicken", price: 300,img:"./photo/wok6.jpg" }],
 
  Desserts:[
    {name:"sectionimg", img:"./photo/Layer 5.png"},
    { name: "Glazed Donut", price: 50,img:"./photo/Glazed Donut.png"},
    { name: "Chocolate Donut", price: 70,img:"./photo/Chocolate Donut.jpg"},
    { name: "Strawberry Donut", price: 90,img:"./photo/Strawberry Donut.avif"},
    { name: "Vanilla Cream Donut", price: 100,img:"./photo/Vanilla Cream Donutavif.avif"},
    { name: "Boston Cream Donut", price: 50,img:"./photo/Boston Cream Donut.jpeg"},
    { name: "Powdered Sugar Donut", price: 80,img:"./photo/Powdered Sugar Donut.webp"},],
  
  Pasta:[ 
    {name:"sectionimg", img:"./photo/Layer 6.png"},
    { name: "Spaghetti Pasta", price: 150,img:"./photo/Spaghetti .avif"},
    { name: "Fettuccine Pasta", price: 170,img:"./photo/Fettuccine.webp"},
    { name: "Penne Pasta", price: 230,img:"./photo/Penne.avif"},
    { name: "Linguine Pasta", price: 200,img:"./photo/Linguine.avif"},
    { name: "Fusilli Pasta", price: 300,img:"./photo/Fusilli2.png"},
    { name: "Ravioli Pasta", price: 280,img:"./photo/Ravioli.jpeg"},

  
  
  ]
  
  };

let categories = [];

let users =[
  {Selesid:"16524454564",password:"admin#123"},
  {Selesid:"15545541549",password:"admin@123"},
  {Selesid:"72565565659",password:"admin$123"}
]

localStorage.setItem("products",JSON.stringify(products))
localStorage.setItem("categories",JSON.stringify(categories))
localStorage.setItem("users",JSON.stringify(users))
//  let products = JSON.parse(localStorage.getItem('products'))
//  let categories =JSON.parse(localStorage.getItem('categories'))