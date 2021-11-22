
import "@babel/polyfill";
import './modulos/helpers/componente';
import './scss/estilos.scss';

let menuSidebar = document.querySelector('.m-menu-sidebar');
let toogleBtn = document.querySelector('.m-menu-sidebar__button');
let menuSidebarList = document.querySelector('.m-menu-sidebar__list')
let mainContainer = document.querySelector('.main-container');

// menuSidebarList.addEventListener('mouseover', ()=>{
//     mainContainer.classList.contains("m-menu-sidebar--closed") ? mainContainer.classList.remove("m-menu-sidebar--closed") : '';
// })
menuSidebar.addEventListener('click', (e) => {
    console.log(e.target);
    
    let elemento = e.target;
    switch (true) {
        case elemento.matches('.m-menu-sidebar__button , .m-menu-sidebar__button *'):
            menuSidebar.classList.toggle("m-menu-sidebar--closed");
            break;
        case elemento.matches('.m-menu-sidebar__list-item-link'):
            elemento.classList.toggle('link-selected');
            elemento.parentNode.classList.toggle('list-open');
            break;
        default:
            console.log('nada')
    }

})
