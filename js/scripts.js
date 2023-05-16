'use strict';

const ball = document.querySelector('#ball');

document.addEventListener('click', (event) => {

    console.log(event.clientX);
    console.log(event.clientY);

    ball.style.transform = `translateY(${event.clientY-25}px)`;
    ball.style.transform += `translateX(${event.clientX-25}px)`;
    
})