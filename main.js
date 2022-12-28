let heading = document.getElementById("lis");
const openBtn = document.getElementById("lis");
const closeBtn = document.getElementById("lis");
let container = document.getElementById("lis");

openli.addEventListener("click", ()=>{
    container.classList.add("active")
})

closeli.addEventListener("click", ()=>{
container.classList.remove("active")

})


