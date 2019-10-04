// Your code goes here

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', function () {
    logo.style.color = 'dodgerblue'
});

const body = document.querySelector('body');
const title = document.querySelector('h2');

body.addEventListener('keydown', function () {
    title.style.color = "pink"
});

const para = document.querySelector('p');

window.addEventListener('scroll', function () {
    para.style.color = 'blue';
});

const signUp = document.querySelector('.btn')

window.addEventListener('dblclick', function () {
    signUp.style.backgroundColor = "HotPink";
});

window.addEventListener("load", function (e) {
    alert("We want you to have FUN on the FunBus!");
    setTimeout(4000);
});

window.addEventListener("resize", function () {
    alert("OH NO! You're shrinking me!");
    setTimeout(4000);
});

const drag = document.querySelector('img');

drag.addEventListener('drag', function (e) {
    e.target.style.display = 'none';
});

const form = document.getElementById("form");

form.addEventListener("focus", function( event ) {
    event.target.style.background = "orange";
}, true);

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom;

body.addEventListener('wheel', zoom);

const selectElement = document.querySelector('.roadTrip');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You want to go to ${event.target.value}`;
});

const secondbtn = document.getElementById('twobtn');

secondbtn.addEventListener('click', function () {
    secondbtn.style.backgroundColor = "red"
});

secondbtn.addEventListener('dblclick', function (event) {
    secondbtn.style.backgroundColor = "purple"
    event.stopPropagation()
});

const navItem = document.getElementsByClassName('nav-link');

navItem[0].addEventListener('click', event => {
    event.preventDefault();
})

navItem[1].addEventListener('click', event => {
    event.preventDefault();
})
navItem[2].addEventListener('click', event => {
    event.preventDefault();
})
navItem[3].addEventListener('click', event => {
    event.preventDefault();
})
