const toggleButton = document.getElementsByClassName("toggleButton")[0]
const navMenu = document.getElementsByClassName("navMenu")[0]

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle("activeNav", window.scrollY > 0)
})