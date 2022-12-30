import anime from 'animejs/lib/anime.es.js';

const scrollUpButton = document.querySelector('.scrollUpButton');
const aboutMeButton = document.querySelector('#aboutMe-btn')
let scrollToDisplay
// responsive script
let viewport500_match = window.matchMedia("(max-width: 500px)").matches;
viewport500_match ? scrollToDisplay = 20 : scrollToDisplay = 300;
window.onscroll = function () {
	if (document.body.scrollTop > scrollToDisplay || document.documentElement.scrollTop > scrollToDisplay) {
		scrollUpButton.style.display = "inherit";
	} else {
		scrollUpButton.style.display = "none";
	}
};

// onClick animate
const scrollUpDelay = 400;
scrollUpButton.addEventListener("click", () => {	
	anime({
		targets: scrollUpButton,
		translateY: [
			{ value: -30, easing: "easeOutElastic(1, .6)" },
			{ value: 0, easing: "linear", duration: 400, delay: 100 },
		],
	});
	// animation waiting delay
	setTimeout(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, scrollUpDelay);
});

