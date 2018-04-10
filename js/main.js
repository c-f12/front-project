export class Main{
    constructor(){
        this.vista = {
            menuList: document.querySelector('#menu-list'),
            navBars: document.querySelector('#nav-bars'),
        }
        this.vista.navBars.addEventListener('click',this.showMenu.bind(this),false);
    }

    showMenu(){

        if(menuList.style.display == 'block'){
            this.menuList.style.display = 'none';
            this.navBars.classList.add('fa-bars');
            this.navBars.classList.remove('fa-times');
        } 
        else {
            this.menuList.style.display = 'block';
            this.navBars.classList.remove('fa-bars');
            this.navBars.classList.add('fa-times');
        }
    }
}