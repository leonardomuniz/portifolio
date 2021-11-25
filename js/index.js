const target = document.querySelectorAll('[data-anime]');
const images = document.querySelectorAll('article > img');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 3)/4;

    target.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    });

    images.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src');
        }
    })
}

window.addEventListener('scroll', animeScroll);