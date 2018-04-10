export class Main{
    constructor(){
        this.vista = {
            menuList: document.querySelector('#menu-list'),
            navBars: document.querySelector('#nav-bars'),
        }
        this.vista.navBars.addEventListener('click',this.showMenu.bind(this),false);
    }

    showMenu(){
        if(this.vista.menuList.style.display == 'block'){
            this.vista.menuList.style.display = 'none';
            this.vista.navBars.classList.add('fa-bars');
            this.vista.navBars.classList.remove('fa-times');
        } 
        else {
            this.vista.menuList.style.display = 'block';
            this.vista.navBars.classList.remove('fa-bars');
            this.vista.navBars.classList.add('fa-times');
        }
    }
}