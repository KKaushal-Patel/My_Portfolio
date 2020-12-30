// Toggle style switcher
//when we click on style switcher that theme color pop-out:
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//style-switcher hide when we are scrolling the page
window.addEventListener("scroll",()=>{
    if (document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }

})

//--------- To change theme color-----------------
// const alternateStyles = document.querySelectorAll(".alternate-style");

// function setActiveStyle(color) {
//     localStorage.setItem("color",color);
//     changeColor();
// }

// function changeColor() {
//     alternateStyles.forEach((style) => {
//         if (localStorage.getItem("color") === style.getAttribute("title")) {
//             style.removeAttribute("disabled"); //when we click on any theme color,
//             //at that moment selected disabled is remove and that color applied to the screen
//         }
//         else{
//             style.setAttribute("disabled",true);
//         }
//     })
// }
// // checking if 'color' key exist and last theme was still prefered for next visit
// if(localStorage.getItem("color")!== null){
//     changeColor();
// }



//-------- To switch between day-night theme----------------
 const dayNight = document.querySelector(".day-night");

//change dark and light on click
dayNight.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
    updateIcon();
})

function themeMode() {
    // checking if 'theme' key exist
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.remove("dark")
        }   
        else{
            document.body.classList.add("dark")
        }
    }
    updateIcon();
}
themeMode();

function updateIcon() {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
        dayNight.querySelector("i").classList.remove("fa-moon")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
        dayNight.querySelector("i").classList.remove("fa-sun")

    }
}


// dayNight.querySelector("i").classList.toggle("fa-sun")
    // dayNight.querySelector("i").classList.toggle("fa-moon")


//  window.addEventListener("load",()=>{
//     if (document.body.classList.contains("dark")) {
//         dayNight.querySelector("i").classList.add("fa-sun")
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon")

//     }


//  })