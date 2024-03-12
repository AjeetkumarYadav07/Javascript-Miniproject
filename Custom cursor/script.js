//   --let acess the html ---
 let main = document.querySelector ("#main")
 let crsr = document.querySelector (".cursor")
//   console.log (crsr)

    // ---Use "mousemove " Event and use posione absolute ---

   main.addEventListener("mousemove", function ( move) {
     crsr.style.left = move.x+ "px"
     crsr.style.top = move.y+ "px"
  
   })