var myCart=document.getElementById("cart")
var finalButton =document.getElementById("finalButton");
var totalPrice=0;
var elements=document.querySelectorAll(".card-group .card");
var finalPrice=document.getElementById("finalPrice");
elements.forEach(function(element){
  element.onclick=function() {
    totalPrice+=+(element.getAttribute("price"));
    myCart.innerHTML+=`<h1>${element.getAttribute("productName")}</h1>`
  }
})

function handleFinalClick(){
  finalPrice.innerHTML=`${totalPrice}$`;
  console.log(totalPrice);
 }
 finalButton.onclick=handleFinalClick;