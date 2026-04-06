const openNav = () => {
    for (let i = 0; i < bars.length; i++) {

        bars[i].classList.toggle('dis--on')

    }
}

const openLogin = () => {
    loginBlock.classList.toggle("login--active")
}

const setCookie = () => {
    const username = document.querySelector(".form__input[name='username']")
    const email = document.querySelector(".form__input[name='email']")

    document.cookie = `username=${username.value}, email=${email.value}; max-age=${24*60*60*1000}`
}

const scrollTop = () => {
    let count = window.scrollY

    if (count > 700) {
        scrollUp.classList.add("scrollVis")
    }
    else{
        scrollUp.classList.remove("scrollVis")
    }

    if(count < 700){
        scrollDown.classList.add("scrollVis")
    }
    else{
        scrollDown.classList.remove("scrollVis")
    }
}

const toTop = () => {
    window.scrollTo(0, 0)
}

const toDown = () => {
    window.scrollTo(0, document.body.scrollHeight)
}

window.addEventListener("scroll", scrollTop)

const loginBlock = document.querySelector(".header__login"),
        scrollUp = document.querySelector(".main__btnScrollUp"),
        scrollDown = document.querySelector(".main__btnScrollDown");

const bars = [document.querySelector('.nav__items_list'), document.querySelector('.nav__btns')]

