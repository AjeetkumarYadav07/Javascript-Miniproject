//    Task ----
   //sjwp real products 

     var products = [
        {name :"White Chair " , headline : "Soft like cloud " , price : " 1500" , image : "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
        {name :"Black Chair " , headline : "Mast Maken  " , price : " 1700" , image : "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
        {name :"Wodden Chair " , headline : "Strong and Reliable  " , price : " 1900" , image : "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name :"Wodden Chair " , headline : "Strong and Reliable  " , price : " 1900" , image : "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
     ]

  var popular = [

    {name :"White Chair " , headline : "Soft like cloud " , price : " 1500" , image : "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    {name :"Black Chair " , headline : "Mast Maken  " , price : " 1700" , image : "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    {name :"Wodden Chair " , headline : "Strong and Reliable  " , price : " 1900" , image : "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    
    {name :"Green Chair " , headline : "Strong and Reliable  " , price : " 2100" , image : "https://images.unsplash.com/photo-1611464908623-07f19927264e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name :"Blue Chair " , headline : "Strong and Reliable  " , price : " 2100" , image : "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ];









   function addCart (){ 
    var clutter = " "
    products.forEach( (product , index) =>{
       clutter+= `   <div class="product w-fit rounded-xl p-2 bg-white">
       <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
         <img class= "w-full h-full object-cover " src= "${product.image}"/>
       </div>
       <div class="data w-full px-2 py-5">
           <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name} </h1>
           <div class="flex justify-between w-full items-center mt-2">
               <div class="w-1/2">
                   <h3 class="font-semibold opacity-20">${product.headline}</h3>
                   <h4 class="font-semibold mt-2">&#x20B9${product.price}</h4>
               </div>
               <button  data-number= ${index} class="  add w-10 h-10 rounded-full shader text-yellow-400">
               <i  data-number= ${index}  class="  add  ri-add-line"></i></button>
           </div>
       </div>
   </div> `  
    });

    document.querySelector(".products").innerHTML = clutter ;


   }
   
   
   function addPopular (){
       var goodProduct = " " ;
     popular.forEach( (product) =>{
        goodProduct+= `  <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">$ ${product.price}</h4>
        </div>
    </div> `;

     });

     document.querySelector(".populars").innerHTML = goodProduct;

   }
   
    
   function addtoCart () {
      document.querySelector(".products")
      .addEventListener("click" , (details) =>{
        if (details.target.classList.contains ('add')){
            console.log("add kro")
        }
      })
   }

    addtoCart ();
   addCart ();

   addPopular ();
 