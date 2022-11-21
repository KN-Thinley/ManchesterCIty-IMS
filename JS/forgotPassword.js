const hamburger = document.getElementsByClassName('button')[0]
const navbarLink = document.getElementsByClassName('navbar-link')[0]

hamburger.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})