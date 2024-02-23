'use strict'
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.addEventListener('click', event => {
    burger.classList.toggle('burger_active')
    menu.classList.toggle('menu_active')
    console.log(event.currentTarget)
})

const header = document.querySelector('.header')
document.addEventListener('scroll', () => {
    if (window.scrollY >= 1) header.classList.add('header_active')
    else header.classList.remove('header_active')
})

const sections = document.querySelectorAll('section')
const menuLinks = menu.querySelectorAll('.menu__link')
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop - 60
        let height = section.offsetHeight
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + height) {
            menuLinks.forEach(link => {
                link.classList.remove('menu__link_active')
                menu.querySelector(`.menu__link[href*='${id}']`).classList.add('menu__link_active')
            })
        }
    })
}
// PROJECTS CARD SLIDER
const slideContent = document.querySelector('.cards__content')
const arrowButtons = document.querySelectorAll('.cards__arrow')
const firstCardWidth = slideContent.querySelector('.cards__item').offsetWidth//FIX
const slideChildren = [...slideContent.children]

let isDragging = false
let startX
let startScrollLeft

let cardPerView = Math.round(slideContent.offsetWidth / firstCardWidth)

slideChildren.slice(-cardPerView).reverse().forEach(card => {
    slideContent.insertAdjacentHTML('afterbegin', card.outerHTML)
})
slideChildren.slice(0, cardPerView).forEach(card => {
    slideContent.insertAdjacentHTML('beforeend', card.outerHTML)
})
arrowButtons.forEach(button => {
    button.addEventListener('click', () => {
        slideContent.scrollLeft += button.classList.contains('cards__arrow_right') === false ? -firstCardWidth : firstCardWidth
    })
})

const dragStart = e => {
    isDragging = true
    slideContent.classList.add('dragging')

    startX = e.pageX
    startScrollLeft = slideContent.scrollLeft
}
const dragging = e => {
    if (!isDragging) return
    slideContent.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
    isDragging = false
    slideContent.classList.remove('dragging')
}

const InfinityScroll = () => {
    if(slideContent.scrollLeft === 0) {
        slideContent.scrollLeft = slideContent.scrollWidth - (2 * slideContent.offsetWidth)
    }
    else if(Math.ceil(slideContent.scrollLeft) === slideContent.scrollWidth - slideContent.offsetWidth) {
        slideContent.scrollLeft = slideContent.offsetWidth
    }
}

slideContent.addEventListener('mousedown', dragStart)
slideContent.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
slideContent.addEventListener('scroll', InfinityScroll)
slideContent.onmouseover(dragging)


// // TYPING ANIMATION
// new Typed('.hero__content-AnimateTyping', {
//     strings: ['Adaptive web development', 'Cross-browser web development', 'Valid web development', 'High-quality web development', 'Reliable web development'],
//     typeSpeed: 60,
//     backSpeed: 100,
//     loop: true
// })