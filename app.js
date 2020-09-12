const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById('nav-toggle');
    const nav  = document.getElementById('nav-menu');
    if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('show')
            })
        }
}
showMenu('nav-toggle','nav-menu')
