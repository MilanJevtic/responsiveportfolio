const mobileMenu = () => {
    var btn = document.querySelector('.header button');
    var list = document.querySelector('.header ul');

    console.log(list);

    if (btn.innerText === 'MENU'){
        btn.innerText = 'CLOSE';
        list.style.display = 'block';
    }
    else {
        btn.innerText = 'MENU';
        list.style.display = 'none';
    }
}

var rightbtn = document.querySelector('#right-btn');
var leftbtn = document.querySelector('#left-btn');
var pictures = document.querySelectorAll('.slider-images img');

var imgNum = 0;

const displayNone = () =>{
    pictures.forEach((img) =>{
        img.style.display = 'none';
    })
}

const moverRight = () =>{
    displayNone();
    imgNum ++;

    if(imgNum === pictures.length){
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone();
    imgNum --;

    if(imgNum === -1){
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
}

rightbtn.addEventListener('click', moverRight);
leftbtn.addEventListener('click', moveLeft);

const portfolioSort = (button) => {
    var category = button.getAttribute('data-category');
    var portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if (category === 'sve'){
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}
const openModal = () => {
    var modalWindow = document.querySelector('.popup-modal');
    var overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    var modalWindow = document.querySelector('.popup-modal');
    var overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}