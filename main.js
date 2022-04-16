const btn = document.querySelector('.burguer_btn');

btn.addEventListener('click', function(){
    this.classList.toggle('is_active');
});

const nav = document.querySelector('.nav_items');
const navLinks = document.querySelectorAll('.nav_items a');
const navSlide = () => {
    btn.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,i)=>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${i/7+1.5}s`;
            }
        })
    } )
}

navSlide();







