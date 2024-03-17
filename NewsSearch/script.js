var arr = [
    {name: "Petals of roses", image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "the crowd of city", image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "fruits of planet", image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "orange peeled", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "apple juice", image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: " Cold drink", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "dog in street", image: "https://plus.unsplash.com/premium_photo-1663126581582-a1f900083da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {name: "Class room", image:  " https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "College", image : "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: " Desktop computer", image : "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

   let mainBox = document.querySelector(".container")

function showTheCards() {
    var box = "";
    // forEach to iterate over each object in the array
    arr.forEach((obj) => {
        box += `<div class="box">
            <img class="cursor-pointer" src="${obj.image}" alt="image">
            <div class="caption"> glo </div>
        </div>`;
    });

    mainBox.innerHTML = box ;
    // console.log(box);
}
      
    function handlSearchFuntionality () {

           var input =document.querySelector ("#searchinput") 
        input.addEventListener("focus" , function () {
             document.querySelector(".overlay").style.display = "block" ;
        })

        input.addEventListener("blur" , function () {
            document.querySelector(".overlay").style.display = "none" ;
       });




    //   for search value 

      input.addEventListener ("input" , function () {
     const filteredArray = arr.filter((obj) => obj.name.toLowerCase().startsWith(input.value));
     
  var clutter = " " ;
    filteredArray.forEach(function (obj) {
        clutter += ` <div class = "res flex px-8 py-3"> 
        <i class = "ri-search-line font-semibold mr-5"> </i> 
        <h3 class ="font-semibold "> ${obj.name} </h3>
        </div> `
    })
         document.querySelector(".searchdata").style.display ="block";

         document.querySelector(".searchdata").innerHTML = clutter
        

    //   console.log(filteredArray);
    
    } )





    }

    handlSearchFuntionality ();
showTheCards();
