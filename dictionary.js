const form = document.querySelector('#input-form')
const word = document.querySelector('#word')
const pronunciation = document.querySelector('#pronunciation')
const partOfSpeechOne = document.querySelector("#pos-one")
const definitionList = document.querySelector('#definition-list')
const synonyms = document.querySelector('.synonyms')
const boilerplate = document.querySelector('.boilerplate')
const playbackButton = document.querySelector('#playback-button')
const footerContainer = document.querySelector('#footer')

function submitForm(event){

    //Preventing page refresh
    event.preventDefault();
 }

form.addEventListener('submit', submitForm)

function addItem(def) {
    let newItem = document.createElement('li')
    newItem.className = 'definition'
    definitionList.appendChild(newItem)
    newItem.textContent = def
}

function getNumberOfMeanings(array) {
    console.log(array.length)
    array.length
}

const callFunction = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func()
    }
}

form.addEventListener('submit', () => {
    // console.log('submitted')
    const userInput = document.querySelector('#user-input').value
    // console.log(userInput)

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
.then(response => response.json())
.then(data => {
    console.log(data[0].meanings);
    boilerplate.classList.remove('hidden')
    playbackButton.classList.remove('hidden')
    footerContainer.classList.remove('hidden')
    getNumberOfMeanings(data[0].meanings)
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic
    partOfSpeechOne.textContent = data[0].meanings[0].partOfSpeech
    
        let i = 0
        while (i < data[0].meanings[0].definitions.length) {
            // console.log(data[0].meanings[0].definitions[i].definition)
            addItem(data[0].meanings[0].definitions[i].definition)
            i++
        }
    
    synonyms.textContent = data[0].meanings[0].synonyms.join(', ')
    
});

})

// `${data[0].meanings[0].definitions[def].definition}`
