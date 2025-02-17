// Toggle Sidebar
function sidebar_toggle(type){
    let sidebar = document.querySelector('.sidebar');
    let main = document.querySelector('.main');

    if(sidebar.classList.contains('sidebar-open')){
        sidebar.classList.remove('sidebar-open');
        main.classList.remove('complete-open');
        if(type === 'partial'){
            sidebar.classList.add('sidebar-partial');
            main.classList.add('partial-open');
        }
    }

    else{
        sidebar.classList.add('sidebar-open');
        main.classList.add('complete-open');
        if(type === 'partial'){
            sidebar.classList.remove('sidebar-partial');
            main.classList.remove('partial-open');
        }
    }
}


window.addEventListener('DOMContentLoaded', (event)=>{
    // Sidebar status to Main body
    let sidebar = document.querySelector('.sidebar');
    let main = document.querySelector('.main');

    if(sidebar){
        if(sidebar.classList.contains('sidebar-partial')){
            main.classList.add('partial-open');
        }
    
        else if(sidebar.classList.contains('sidebar-open')){
            main.classList.add('complete-open');
        }
    }
    // Sidebar status instantiation ends

    // Navbar on mobile Animation
    let nav = document.querySelector('.nav-on-mobile');

    if(nav){
        let min_timedelay = 0.7;
        let delay_inc = 0.1;
        let nav_children = nav.children;

        for(let li of nav_children){
            li.style.transitionDelay = `${min_timedelay}s`;
            min_timedelay += delay_inc;
        }
    }

    // Exit sidebar on mobile
    let sidebar_elements = document.querySelectorAll('.sidebar-element');

    sidebar_elements.forEach(sidebar_element => {
        sidebar_element.addEventListener('click', e => {
            sidebar_toggle();
        })
    })
})

function navToggle(){
    let nav = document.querySelector('.nav-on-mobile');

    if(nav.classList.contains('nav-on-mobile-open')){
        nav.classList.remove('nav-on-mobile-open');
    }

    else{
        nav.classList.add('nav-on-mobile-open');
    }
}