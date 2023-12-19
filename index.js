// dark mode
const body = document.querySelector('body')
const toggler = document.querySelector('#toggle')

toggler.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})

// font selector
const fontSelector = document.querySelector('#font-select')
const selectedFont = document.querySelector('#selected-font')
const fontPopup = document.querySelector('#font-select-popup')
const mainContainer = document.querySelector('#main-container')
const selectSans = document.querySelector('#select-sans')
const selectSerif = document.querySelector('#select-serif')
const selectMono = document.querySelector('#select-mono')

fontSelector.addEventListener('click', () => {
    fontPopup.classList.toggle('hidden')
})

selectSans.addEventListener('click', () => {
    mainContainer.classList.add('sans-serif')
    mainContainer.classList.remove('serif')
    mainContainer.classList.remove('mono')
    fontPopup.classList.add('hidden')
    selectedFont.textContent = 'Sans Serif'
})

selectSerif.addEventListener('click', () => {
    mainContainer.classList.add('serif')
    mainContainer.classList.remove('sans-serif')
    mainContainer.classList.remove('mono')
    fontPopup.classList.add('hidden')
    selectedFont.textContent = 'Serif'
})

selectMono.addEventListener('click', () => {
    mainContainer.classList.add('mono')
    mainContainer.classList.remove('sans-serif')
    mainContainer.classList.remove('serif')
    fontPopup.classList.add('hidden')
    selectedFont.textContent = 'Mono'
})