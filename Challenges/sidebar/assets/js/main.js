const checkbox = document.querySelector('.checkbox')
const profile = document.querySelector('.profile')
const navbar = document.querySelector('.sidebar')

const closeNav = () => {
    navbar.classList.toggle('closed-nav')
    profile.classList.toggle('closed-wrapper')
}



checkbox.addEventListener('click', closeNav)