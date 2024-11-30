const dropdownBtn = document.querySelectorAll('.dropdown-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const subMenu = document.querySelectorAll('.sub-menu');
const sideBar = document.querySelector('#slider');
const mainEl = document.querySelector('main');

function toggleSideBar() {
    toggleBtn.classList.toggle('rotate');
    sideBar.classList.toggle('close');
    mainEl.classList.toggle('close');

    subMenu.forEach((sub, ind) => {
        if(sub.classList.contains('show')) {
            sub.classList.remove('show');
            dropdownBtn.forEach(btn => {
                btn.classList.remove('rotate');
            })
        }
    })
}

function toggleSubMenu(btn) {
    if(sideBar.classList.contains('close')) {
        sideBar.classList.toggle('close');
        mainEl.classList.toggle('close');
        btn.classList.toggle('rotate');
        toggleBtn.classList.toggle('rotate');
    }

    btn.nextElementSibling.classList.toggle('show');
    btn.classList.toggle('rotate');
}

dropdownBtn.forEach(btn => {
    btn.addEventListener('click', () => {  
        toggleSubMenu(btn)
    })
})

toggleBtn.addEventListener('click', () => {
    toggleSideBar();
})