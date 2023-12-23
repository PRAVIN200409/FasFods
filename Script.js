let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener("click",  ()  => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener("click", () => {
    body.classList.toggle('showCart')
})

var addfood1 = document.getElementById("add1");
addfood1.addEventListener("click",function(event){
    event.preventDefault()
    num=1;
    var div1=document.createElement("div")
    div1.setAttribute("class","item")
    
    var div2=document.createElement("div");
    div2.setAttribute("class","image");
    div2.innerHTML=`<img src="my-vegpizza.webp">`

    var div3=document.createElement("div");
    div3.setAttribute("class","quantity");
    div3.innerHTML=`<span class="minus" onclick="increase()" >-</span>
    <span class="counter">${num}</span>
    <span class="plus" onclick="decrease()">+</span>`

    function increase()
    {
        var numvalue=document.querySelector(".counter");
        num=int(numvalue);
        num++;
    }
    function decrease()
    {
        var numvalue=document.querySelector(".counter");
        num=int(numvalue);
        num--;
    }

})
