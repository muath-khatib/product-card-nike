
// === Menu ===
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const nav  = document.getElementById(navId);

    if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('show')
            });
        }
}
showMenu('nav-toggle','nav-menu')
/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas');
const colors = document.querySelectorAll('.sneaker__color');
const sneaker = document.querySelectorAll('.sneaker__img');
const navItem = document.querySelectorAll('.nav__link');

function changeSize(){
        sizes.forEach( size => size.classList.remove('active'));
        this.classList.add('active');
    }
    function activeNav(){
        const nav  = document.getElementById('nav-menu');
        navItem.forEach( item => item.classList.remove('active'));
        this.classList.add('active');
        nav.classList.remove('show')
}

function changeColor(){
        let primary = this.getAttribute('primary');
        let color = this.getAttribute('color');
        let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`);

        colors.forEach(c => c.classList.remove('active'));
        this.classList.add('active');

        document.documentElement.style.setProperty('--primary',primary)

        sneaker.forEach(s => s.classList.remove('shows'))
        sneakerColor.classList.add('shows');
}


sizes.forEach(size => size.addEventListener('click',changeSize))
colors.forEach(c => c.addEventListener('click',changeColor))
navItem.forEach(nav => nav.addEventListener('click',activeNav))

function clickPage(page) {
    const pageId = page.getAttribute('id')
        const imagesDiv = document.getElementById('sneaker-images')
        const imgOne = document.getElementById('img-1')
        const imgTwo = document.getElementById('img-2')
        
        if (pageId == "men") {
            imgOne.removeAttribute('src')
            imgOne.setAttribute('src','./assest/img/men1.png')
            imgTwo.removeAttribute('src')
            imgTwo.setAttribute('src','./assest/img/men2.png')
        }else if(pageId == 'women'){
            imgOne.removeAttribute('src')
            imgOne.setAttribute('src','./assest/img/women1.png')
            imgTwo.removeAttribute('src')
            imgTwo.setAttribute('src','./assest/img/women2.png')
        }else if(pageId == 'kids'){
            imgOne.removeAttribute('src')
            imgOne.setAttribute('src','./assest/img/kids1.png')
            imgTwo.removeAttribute('src')
            imgTwo.setAttribute('src','./assest/img/kids2.png')
        }
}