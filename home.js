


let slider = document.getElementById("slider");
let homediv = document.getElementById("home-container");
let allProducts = [];

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        allProducts = data; // Store all products for reference later

        data.forEach((value) => {
            homediv.innerHTML += `
                <div class="col-md-3">
                    <div class="mt-3 card h-100" style="width: 18rem;">
                        <p class="para">${value.category}</p>``
                        <img src="${value.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${value.title}</h5>
                            <p class="card-text">${value.description.slice(0, 150)}...</p>
                            <button class="btn btn-primary w-100">₹${value.price}</button>
                            <button class="btn btn-success w-100 mt-2 add-to-cart-btn" data-id="${value.id}">Add to cart</button>
                        </div>
                    </div>
                </div>`;
        });

        // Add click listeners
        document.querySelectorAll(".add-to-cart-btn").forEach(button => {
            button.addEventListener("click", function () {
                const id = parseInt(this.getAttribute("data-id"));
                const product = allProducts.find(p => p.id === id);
                if (product) {
                    addToCart(product);
                }
            });
        });
    })
    .catch((error) => {
        homediv.innerHTML = `<div class="col-md-3">${error}</div>`;
    });

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart`);
}









const categoryButton = document.querySelector("#cate")

fetch('https://fakestoreapi.com/products/categories')
    .then((res) => res.json())

    .then((data) => {
        categoryButton.innerHTML = `

                 <div class="border  d-flex gap-5 w-100     "> 
                    <div class="  text-center   w-50 ">  <button   class="btn" onclick="elec()"> ${data[0]}  </button>  </div>
                    <div class=" text-center   w-50 ">  <button  class="btn" onclick="jew()"> ${data[1]} </button>   </div>
                    </div>


                    <div class="border border d-flex gap-5 w-100">

                   
                    <div  class="  text-center w-50 ">   <button   class="btn" onclick="men()"> ${data[2]} </button>   </div>
                    <div  class="   text-center   w-50 ">   <button  class="btn" onclick="wom()"> ${data[3]}  </button> </div>
                    </div>
                    
                
                    
                    `



    })

var showdata = document.getElementById("show-data")



function wom() {
    showdata.innerHTML = ""

    fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {


            data.forEach((value) => {

                if (value.category === "women's clothing") {


                    showdata.innerHTML += `
    <div class=" col-md-3   " >
        <div class=" mt-3  card h-100    " style="width: 18rem; ; ">
        <p  class="para"  > ${value.category} </p>
           <img src="${value.image}" class="card-img-top " alt="...">
                   <div class="card-body">
            <h5 class="card-title">${value.title}</h5>
           <p class="card-text">${value.description.slice(0, 150)}....</p>
             <a href="#"  class=" btn btn-primary   w-100  ">${value.price}</a>
                </div>
        </div>
            
   
    </div> `}
            });


        })

        .catch((error) => {
            showdata.innerText = ` <div class=" col-md-3" >   ${error}   </div>`

        })


}



function men() {
    showdata.innerHTML = ""

    fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {


            data.forEach((value) => {

                if (value.category === "men's clothing") {


                    showdata.innerHTML += `
<div class=" col-md-3   " >
    <div class=" mt-3  card h-100    " style="width: 18rem; ; ">
    <p  class="para"  > ${value.category} </p>
       <img src="${value.image}" class="card-img-top " alt="...">
               <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
       <p class="card-text">${value.description.slice(0, 150)}....</p>
         <a href="#"  class=" btn btn-primary  w-100  ">${value.price}</a>
            </div>
    </div>
        

</div> `}
            });


        })

        .catch((error) => {
            showdata.innerText = ` <div class=" col-md-3" >   ${error}   </div>`

        })


}


function elec() {

    showdata.innerHTML = ""
    fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {


            data.forEach((value) => {

                if (value.category === "electronics") {


                    showdata.innerHTML += `
<div class=" col-md-3   " >
    <div class=" mt-3  card h-100    " style="width: 18rem; ; ">
    <p  class="para"  > ${value.category} </p>
       <img src="${value.image}" class="card-img-top " alt="...">
               <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
       <p class="card-text">${value.description.slice(0, 150)}....</p>
         <a href="#"  class=" btn  btn-primary   w-100  ">${value.price}</a>
            </div>
    </div>
        

</div> `}
            });


        })

        .catch((error) => {
            showdata.innerText = ` <div class=" col-md-3" >   ${error}   </div>`

        })


}

function jew() {
    showdata.innerHTML = ""
    fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {


            data.forEach((value) => {

                if (value.category === "jewelery") {


                    showdata.innerHTML += `
<div class=" col-md-3   " >
    <div class=" card mt-3  card h-100    " style="width: 18rem; ; ">
    <p  class="para"  > ${value.category} </p>
       <img src="${value.image}" class="card-img-top " alt="...">
               <div class="card-body">
        <h5 class="card-title">${value.title}</h5>
       <p class="card-text">${value.description.slice(0, 150)}....</p>
         <a href="#"  class=" btn btn-primary   w-100  ">${value.price}</a>
            </div>
    </div>
        

</div> `}
            });


        })

        .catch((error) => {
            showdata.innerText = ` <div class=" col-md-3" >   ${error}   </div>`

        })





}

function resetf() {



    showdata.innerHTML = " "


}





const container = document.getElementById("container");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
if (cart.length == 0) {
    container.innerHTML = `<h2 class="text-center">Your cart is empty</h2>`;
} else {
    cart.forEach((item) => {
        container.innerHTML += `
          <div class="card mb-3" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">Price: ₹${item.price}</p>
              <p class="card-text">Quantity: ${item.quantity}</p>
              <p class="card-text"><small>${item.category}</small></p>
            </div>
          </div>
        `;
    });
}











