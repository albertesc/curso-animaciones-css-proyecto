import './reset.css'
import './style.css'

import anime from 'animejs/lib/anime.es.js';

/* ------------------------------------------------------------------------------------ */
/* Animaciones - ANIME.JS - https://animejs.com/ - https://codepen.io/collection/XLebem */
/* ------------------------------------------------------------------------------------ */

const box = document.querySelector('.box-anime')

const options = {
    targets: ".box-anime",
    left: '240px',
    backgroundColor: '#FFF',
    //borderRadius: ['0%', '50%'], // 0% -> 50%
    //rotate: "1turn",
    //easing: 'easeOutBounce', // https://easings.net/
    //loop: false, // true | false | number
    direction: 'alternate', // alternate | reverese | normal
    translateX: {
        value: 250,
        duration: 800
    },
    rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    duration: 2000,
}

anime(options)

const options2 = {
    targets: ".box-anime-delay",
    translateX: 250,
    duration: 5000,
    //delay: anime.stagger(100),
    //delay: anime.stagger(200, {start: 1000}),
    //delay: anime.stagger(200, {from: 'center'}),
    delay: anime.stagger(200, {direction: "reverse", start: 1000, from: 'center'}),
    rotate: anime.stagger([0, 90]),
}

anime(options2)

/* --------------------------------------------------------------------------------- */
/* Animaciones - ANIME.JS - animación números */
/* --------------------------------------------------------------------------------- */

const myObject = {
    number1: 0,
    number2: "100%",
}

anime({
    targets: myObject,
    number1: 100,
    number2: "0%",
    duration: 8000,
    easing: 'linear',
    round: 1,
    update: function() {
        const number = document.querySelector('.box-number')
        number.innerHTML = myObject.number2
    },
    complete: function() {
        console.log('completado')
    },
    begin: function() {
        console.log('comenzado')
    }
})

/* --------------------------------------------------------------------------------- */
/* Animaciones - ANIME.JS - animación SVG */
/* --------------------------------------------------------------------------------- */

const pathEl = document.querySelector('.svg-motion-path')

const path = anime.path(pathEl)

anime({
    targets: ".box-motion",
    translateX: path('x'),
    translateY: path('y'),
    rotate: path('angle'),
    easing: 'linear',
    duration: 5000,
    loop: true
})

anime({
    targets: ".polymorph",
    duration: 2000,
    easing: 'linear',
    loop: true,
    points: [
        { value: [
            '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
            '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369'
        ]
      },
      { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
      { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
      { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
    ],
})

anime({
    targets: ".heart2 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutElastic',
    duration: 2000,
    direction: 'alternate',
    loop: true
})

/* --------------------------------------------------------------------------------- */
/* Animaciones - ANIME.JS - keyframes */
/* --------------------------------------------------------------------------------- */

anime({
    targets: ".circle",
    keyframes: [
        {translateY: -40, scale: 1.5},
        {translateX: 250, scale: 1},
        {translateY: 40},
        {translateX: 0, scale: 1.5},
        {translateY: 0}
    ],
    duration: 2000,
    loop: true
})

anime({
    targets: '.circle',
    translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
    ],
    translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
    ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: 2, duration: 100, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 100, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
});

/* --------------------------------------------------------------------------------- */
/* Animaciones - ANIME.JS - Timeline */
/* --------------------------------------------------------------------------------- */

const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
    direction: 'alternate'
})

tl
.add({
    targets: '.square',
    translateX: 250
})
.add({
    targets: '.circle-2',
    translateX: 250
}, "-=500")
.add({
    targets: '.triangle',
    translateX: 250
}, 100)