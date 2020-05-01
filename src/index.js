
// import "@babel/polyfill";
// import './modulos/helpers/componente';
import './scss/estilos.scss';

let menuSidebar = document.querySelector('.menu-sidebar');
let toogleBtn = document.querySelector('.menu-sidebar__button');
let menuSidebarList = document.querySelector('.menu-sidebar__list')
let mainContainer = document.querySelector('.main-container');

menuSidebarList.addEventListener('mouseover', ()=>{
    mainContainer.classList.contains("menu-closed") ? mainContainer.classList.remove("menu-closed") : '';
})
menuSidebar.addEventListener('click', (e) => {
    console.log(e.target);
    
    let elemento = e.target;
    switch (true) {
        case elemento.matches('.menu-sidebar__button , .menu-sidebar__button *'):
            mainContainer.classList.toggle("menu-closed");
            break;
        case elemento.matches('.menu-sidebar__list-item-link'):
            elemento.classList.toggle('link-selected');
            elemento.parentNode.classList.toggle('list-open');
            break;
        default:
            console.log('nada')
    }

})
