

// Acess the all objects
let page = document.querySelector(".container");
let love = document.querySelector("i");
let likeBtn = document.querySelector(".like");

// ---acess sencod likeBtn --

let redLike = document.querySelector (".redHeart")


// Define the likeFunction
let likeFunction = function() {
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.8;

    setTimeout(() => {
        love.style.opacity = 0;
    }, 1000);

    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
};

// Add event listener for double click to invoke the likeFunction
let likeEvent = page.addEventListener("dblclick", likeFunction);

// Add event listener for likeBtn click to run the likeFunction
likeBtn.addEventListener("click", function() {
    // Run the likeFunction
    likeFunction();

    // Hide likeBtn and show redLike
    likeBtn.style.opacity = 0;
    redLike.style.opacity = 1 ;

   
});
