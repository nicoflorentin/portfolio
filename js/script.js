import anime from 'animejs/lib/anime.es.js';

document.getElementById('app').innerHTML = `<h1 id='mydiv'>Hola</h1>`

anime({
    targets: '#mydiv',
    translateY: 250
  });