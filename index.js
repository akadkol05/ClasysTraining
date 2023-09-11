// const mobileNavButtons = document.getElementsByClassName("mobile-navbar-btn");
// const navheaders = document.getElementsByClassName("header");

// for (let i = 0; i < mobileNavButtons.length; i++) {
//     mobileNavButtons[i].addEventListener('click', () => toggle_navbar(i));
// }

// function toggle_navbar(index) {
//     if (navheaders[index]) { // Check if the element at the given index exists
//         navheaders[index].classList.toggle("navbar-list");
//     }
// }




// carosal
// const images = [
//     'https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWx0aHklMjBsaWZlc3R5bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
//     'https://unsplash.com/https://images.unsplash.com/photo-1564282350350-a8355817fd2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2ElMjBoZWFsdGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/yn8KzjHGtak',
//     'https://unsplash.com/photos/nhttps://media.istockphoto.com/id/931310312/photo/vitality-concept-watch-repeat-the-moves-poses-from-the-helpful-video-cute-sweet-cheerful.webp?b=1&s=170667a&w=0&k=20&c=n39cIbPLgvIhBPekIijNjPkjMF5TVLySaq-9M8t0eJo=BtmglfY0HU',
//     'https://unsplash.com/https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60/4l8UH4G2_Dg',
//     'https://unsplash.com/photos/kcRFW-https://images.unsplash.com/photo-1603792582751-c73976204e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWx0aHklMjBsaWZlc3R5bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
// ];
const images = [
    './yoga/pic6.png',
    './yoga/pic1.png',
    './yoga/pic2.png',
    './yoga/pic3.png',
    './yoga/pic4.png',
    './yoga/pic5.png',


];
const n = images.length;
const flexcontainer = document.getElementById('flex-container');
const leftbtn = document.getElementById('left-btn');
const rightbtn = document.getElementById('right-btn');
const carousalnav = document.getElementById('carousel-nav');


const containerwidth = 80;
const flexcontainerwidth = n * containerwidth;
flexcontainer.style.width = flexcontainerwidth;

for (let i = 0; i < n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexcontainer.appendChild(newImg);

    const dot = document.createElement('div');
    dot.classList.add('carousal-dot');
    carousalnav.appendChild(dot);
    dot.addEventListener('click', (event) => {
        const index = [...carousalnav.children].indexOf(event.target);
        currposition = index;
        showImg(index);
    })
}

let currposition = 0;
showImg(0);
leftbtn.addEventListener('click', () => {
    if (currposition > 0) {
        showImg(currposition - 1)
    } else {
        showImg(n - 1)
    }
})

rightbtn.addEventListener('click', () => {
    if (currposition < n - 1) {
        showImg(currposition + 1)
    } else {
        showImg(0) // Reset to the beginning
    }
})

function showImg(position) {
    const translateXdist = -position * containerwidth;
    flexcontainer.style.transform = `translateX(${translateXdist}vw)`;
    const prevdot = carousalnav.children[currposition];
    prevdot.classList.remove('active');
    currposition = position;
    const curdot = carousalnav.children[currposition];
    curdot.classList.add('active');

    leftbtn.style.visibility = 'visible';
    rightbtn.style.visibility = 'visible';
}


