


let homediv = document.getElementById("home-container")
fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

     console.log(data)
        data.forEach((value) => {



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
   

  
    function wom (){
        showdata.innerHTML = ""

        fetch('https://fakestoreapi.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
    
        
            data.forEach((value) => {
                
if(value.category === "women's clothing"){


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


  
 function men (){
    showdata.innerHTML = ""

    fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

    
        data.forEach((value) => {
            
if(value.category === "men's clothing"){


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


function elec (){

    showdata.innerHTML = ""
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

    
        data.forEach((value) => {
            
if(value.category === "electronics"){


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

function jew ( ){
    
showdata.innerHTML = ""
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

    
        data.forEach((value) => {
            
if(value.category === "jewelery"){


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

function resetf (){

    
    showdata.innerHTML = " "


}




