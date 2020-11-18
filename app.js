const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlink = document.querySelectorAll('.nav-link li');



    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate link
        navlink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
            console.log(index);
        });
        //BURGER ANIM
        burger.classList.toggle('toggle');

    });

}

navSlide();

//    MODAL

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});