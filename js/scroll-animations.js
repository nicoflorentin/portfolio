import anime from 'animejs/lib/anime.es.js';

const aboutMeSection = document.querySelector('#aboutMe');
const skillsSection = document.querySelector('.skillsSection');
const aboutMe_left = document.querySelector('#aboutLeft')
const aboutMe_right = document.querySelector('.aboutMeContainer')
const skills_left = document.querySelector('.skillsContainer')
const skills_right = document.querySelector('#skillsRight')

aboutMe_left.style.transform = 'translatex(-100px) translatey(100px)';
aboutMe_left.style.opacity = '0';
aboutMe_right.style.transform = 'translatex(100px) translatey(-100px)';
aboutMe_right.style.opacity = '0';

skills_left.style.transform = 'translatex(-100px) translatey(100px)';
skills_left.style.opacity = '0';
skills_right.style.transform = 'translatex(100px) translatey(-100px)';
skills_right.style.opacity = '0';

const diagonalAnimate = (el_left, el_right) => {

    anime({
        targets: [el_left, el_right],
        opacity: 1,
        translateX: 0,
        translateY: 0,
        easing: 'easeInOutQuad',
        duration: 300
    })
}

// Intersection Observer API
var aboutme_observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        diagonalAnimate(aboutMe_left, aboutMe_right);
    } 
}, { threshold: [0.7] });
aboutme_observer.observe(aboutMeSection);

var skills_observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        diagonalAnimate(skills_left, skills_right);
    } 
}, { threshold: [0.7] });
skills_observer.observe(skillsSection);