// ----First acess the all values ---
 let relation = document.querySelector("#relation")
 let addFrnd = document.querySelector("#add")
 let remove = document.querySelector (" #remove")
 
 addFrnd.addEventListener("click" , function () {
    relation.innerHTML = "Freind"
    relation.style.color = "green"
     console.log("donw")
 })

 remove.addEventListener("click" , ()=>{
    relation.innerHTML = "Stranger"
    relation.style.color = "red"
 
 })
 

//  ----2nd part ----

let sts = document.querySelector ("h3")
let addBtn = document.querySelector (".addFrnd ")
  let val = 0 

  addBtn.addEventListener("click" , function (){
     if (val == 0) {
        sts.innerHTML = "Friend"
        sts.style.color = "green"
        addBtn.innerHTML = "remove"
        
        val = 1
     } else {
        
        addBtn.innerHTML = "Add Friend"
        sts.innerHTML = "Stranger"
        sts.style.color = "red"
        val = 0
       
     }
  })
   

