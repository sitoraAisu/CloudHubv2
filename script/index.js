const openNav = () => {
    for (let i = 0; i < bars.length; i++) {
        
        bars[i].classList.toggle('dis--on')
        
    }
}

const bars = [document.querySelector('.nav__items_list'), document.querySelector('.nav__btns')]