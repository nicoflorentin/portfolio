import { scrollIntoView } from 'scroll-js'

const aboutmeButton = document.getElementById('aboutMe-btn')
const aboutMeDiv = document.getElementById('aboutMe')
aboutmeButton.addEventListener('click', () => {
    scrollIntoView(aboutMeDiv, document.body, {
        duration: 1000,
        easing: 'ease-in'
    })
})

const skillsButton = document.getElementById('skills-btn')
const skillsDiv = document.getElementById('skills')
skillsButton.addEventListener('click', () => {
    scrollIntoView(skillsDiv, document.body, {
        duration: 1000,
        easing: 'ease-in',
        top: '2000px'
    })
})