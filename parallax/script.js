window.addEventListener("scroll", (e)=> {

    // let bodyHeight = document.body.scrollHeight;

    const list = document.querySelectorAll("li")
    const firstSectionHeight = document.querySelector('section').offsetHeight;
    // const maintext = document.querySelector(".mainText")

    list.forEach( item => {
        if(window.scrollY  < firstSectionHeight ){
            item.style.transform = "translate3d(0px," + (window.scrollY * item.dataset.rate) + "px, 0px)"
            item.style.opacity = 1 - window.scrollY / firstSectionHeight;
            // if(maintext.classList.contains("show")) maintext.classList.remove("show")
        }else{
            item.style.transform = "none" // translate3d(0px,0px, 0px)
            // maintext.classList.add("show")
        }

    }) 

})


// CON INTERSECTION OBSERVER

const observer = new IntersectionObserver( (entries) => {
    entries.forEach( entry => {
        if(entry.isIntersecting && entry.target.classList.contains("mainText")) {
            entry.target.classList.add("show")
        }else {
            entry.target.classList.remove("show")
        }
    })

})

const maintext = document.querySelector(".mainText")
observer.observe(maintext)