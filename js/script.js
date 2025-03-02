window.addEventListener('DOMContentLoaded', ()=>{

    const tabs_menu = document.querySelectorAll('.tab-menu li'),
    tabs_secondMenuLI = document.querySelectorAll('.tab-secondMenu li'),
    tabs_secondMenu = document.querySelectorAll('.tab-secondMenu'),
    tabsContent = document.querySelectorAll('.tab-content'),
    tabsParent = document.querySelector('.tab-menu'),
    tabsParent2 = document.querySelectorAll('.tab-secondMenu');

    function hideTabcontent(){
        tabsContent.forEach(item =>{
            item.style.display = 'none';    
        });
        tabs_secondMenu.forEach(item =>{
            item.style.display = 'none';    
        });
    
        tabs_menu.forEach(item =>{
            item.classList.remove('tab-active');
        });
        tabs_secondMenuLI.forEach(item =>{
            item.classList.remove('secondMenu-active');
         });
    }

    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabs_menu[i].classList.add('tab-active');
        tabs_secondMenu[i].style.display = 'flex    ';
        tabs_secondMenuLI.classList.add('secondMenu-active');
    }
    hideTabcontent();
    showTabContent();
    //tabsParent.addEventListener('click', (event)=>{}
})