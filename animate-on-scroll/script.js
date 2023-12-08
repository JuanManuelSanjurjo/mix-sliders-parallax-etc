// const parallax = document.getElementById("div1")

// window.addEventListener("scroll", ()=>{
//     let offset = window.scrollY
//     parallax.style.backgroundPositionY = offset * 0.7 + "px"
// })



const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenDivs = document.querySelectorAll(".hidden")
hiddenDivs.forEach( element => observer.observe(element))