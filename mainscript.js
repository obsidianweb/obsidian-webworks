//Function to define elements specified by id
function getEl(id){
    return document.getElementById(id)
}
let header = getEl("header");

//Sticky navbar function
function sticky(){
    if(window.scrollY >= 100){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }

    window.scrollX = 0
}
setInterval(sticky, 20)


function animate(){
    if(window.scrollY >= 70){
        getEl("imgoverlay").firstElementChild.classList.add("animated");
        getEl("imgoverlay").lastElementChild.classList.add("animated")

        clearInterval(aniInt)
    }
}
function animate2(){
    if(window.scrollY >= 70){
        getEl("article").firstElementChild.classList.add("animated2")
        setTimeout(()=>{getEl("middle").classList.add("animated2")}, 1200)
        setTimeout(()=>{getEl("article").lastElementChild.classList.add("animated2")}, 2400)

        clearInterval(aniInt2)
    }
}
let aniInt = setInterval(animate, 20)
let aniInt2 = setInterval(animate2, 20)


const menuIcon = getEl("hamburger");
const navbar = getEl("navbar");

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("active")
})