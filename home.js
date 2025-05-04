

let slider = document.getElementById("slider");
let homediv = document.getElementById("home-container")
fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        console.log(data)
        data.forEach((value) => {

            slider.innerHTML = `  <div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-70" src="./imgs/7688Best-Selling-Online-Products-In-Pakistan-At-Variants.webp" alt="First slide">
          </div>
          
          <div class="carousel-item">
            <img class="d-block w-100 h-70" src="./imgs/Makeup_products.webp" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-70" src="./imgs/istockphoto-504742864-612x612.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
     
            
            
            `




            homediv.innerHTML += `
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
                    
           
            </div> `

            // console.log(value)

        });


    })

    .catch((error) => {
        homediv.innerText = ` <div class=" col-md-3" >   ${error}   </div>`

    })







let cate = document.getElementById("cate")

fetch('https://fakestoreapi.com/products/categories')
    .then((res) => {
        return res.json()
    })

    .then((data) => {
        cate.innerHTML += `

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




