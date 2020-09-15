
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



const pageWomen = document.getElementById('women');


// function changePage(){

// // Image Two Details
// const imgTwo = document.getElementById('img-2')
// const imgTwoColor = imgOne.getAttribute('color')
// const imgTwoSrc = imgOne.getAttribute('src') 
// console.log("fun")

// }

// pageWomen.addEventListener('click',() =>{
//     console.log(pageWomen)
// })
//     const details = [
//     {
//     men: {
//         firstShows: { primaryColor: "#A29596", imgSrc: "./assest/img/Men1.png" },
//         secondSows: { primaryColor: "#111111", imgSrc: "./assest/img/Men2.png" },
//         }
//     },
//     {
//         women: {
//             firstShows: { primaryColor: "#frfrfr", imgSrc: "./assest/img/Women1.png" },
//             secondSows: { primaryColor: "#f2f2f2", imgSrc: "./assest/img/Women2.png" },
//             }
//         },
// ]      

// const details = {
//     men : {
//         firstShows : {primaryColor: "#A29596", imgSrc: "./assest/img/Men1.png"},
//         secondSows: { primaryColor: "#111111", imgSrc: "./assest/img/Men2.png" },
//     },
//     women:{
//         firstShows: { primaryColor: "#frfrfr", imgSrc: "./assest/img/Women1.png" },
//         secondSows: { primaryColor: "#f2f2f2", imgSrc: "./assest/img/Women2.png" },
//         },
// }

function clickPage(page) {
    const pageId = page.getAttribute('id')
    console.log("The page Id : ", typeof pageId)
        // Image One Details
        const imgOne = document.getElementById('img-1')
        const imgTwo = document.getElementById('img-2')
        // let imgOneColor = imgOne.getAttribute('color')
        // let imgOneSrc = imgOne.getAttribute('src') 
        if(pageId == 'men'){
            imgOne.removeAttribute('src');
            imgOne.setAttribute('src','./assest/img/men1.png');

            imgOne.removeAttribute('color')
            imgOne.setAttribute('color','#A29596')

            imgOne.removeAttribute('primary')
            imgOne.setAttribute('primary','#A29596')

            imgTwo.removeAttribute('src');
            imgTwo.setAttribute('src','./assest/img/men2.png');

            imgTwo.removeAttribute('color')
            imgTwo.setAttribute('color','#111111')
            imgTwo.removeAttribute('primary')
            imgTwo.setAttribute('primary','#111111')
            
        }else if ( pageId == 'women'){
            // #a3a1a1 Gray Color
            // Delete Img-1 & Add new Img-1
            imgOne.removeAttribute('src');
            imgOne.setAttribute('src','./assest/img/test1.png');
            //  Delete Color attribute
            imgOne.removeAttribute('color')
            imgOne.setAttribute('color','#a3a1a1')
            //  Delete Primary attribute
            imgOne.removeAttribute('primary')
            imgOne.setAttribute('primary','#a3a1a1')
            // --primary Change
            document.documentElement.style.setProperty('--primary','#a3a1a1')

            // Delete Img-2 & Add new Img-2
            imgTwo.removeAttribute('src');
            imgTwo.setAttribute('src','./assest/img/women2.png');
            //  Delete Color attribute
            imgTwo.removeAttribute('color')
            imgTwo.setAttribute('color','#111111')
            //  Delete Primary attribute
            imgTwo.removeAttribute('primary')
            imgTwo.setAttribute('primary','#111111')
        }   

}













    // Img One details
    const imgOne = document.getElementById('img-1')
    let imgOneColor = imgOne.getAttribute('color')
    let imgOneSrc = imgOne.getAttribute('src')

