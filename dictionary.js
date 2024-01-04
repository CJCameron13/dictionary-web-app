const form = document.querySelector('#input-form')
const word = document.querySelector('#word')
const pronunciation = document.querySelector('#pronunciation')



const playbackButton = document.querySelector('#playback-button')
const footerContainer = document.querySelector('#footer')
const boilerplate = document.querySelector('.boilerplate')

function submitForm(event){

    //Preventing page refresh
    event.preventDefault();
 }

form.addEventListener('submit', submitForm)



//Test function

const logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
    addBoilerplate()
})

//End Test function



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
    getNumberOfMeanings(data[0].meanings)

    function addBoilerplate() {
        let template = document.createElement('div');
        template.innerHTML = `<div class="pos-divider">
        <p class="pos" id="pos-one"></p>
        <div class="divider"></div>
      </div>
      <div class="definition-container">
        <h4>Meaning</h4>
        <ul id="definition-list">
      
        </ul>
        <div class="synonyms-container">
          <h4>Synonyms</h4>
          <p class="synonyms"></p>
        </div>
      </div>`
        
      boilerplate.appendChild(template)
        
    }

    let a = 0
    while (a < data[0].meanings.length) {
        addBoilerplate()
        a++
    }
    

    console.log(data[0].meanings.length)

    const partOfSpeechOne = document.querySelector("#pos-one")
    const definitionList = document.querySelector('#definition-list')
    const synonyms = document.querySelector('.synonyms')

    function addItem(def) {
        let newItem = document.createElement('li')
        newItem.className = 'definition'
        definitionList.appendChild(newItem)
        newItem.textContent = def
    }
    
    playbackButton.classList.remove('hidden')
    footerContainer.classList.remove('hidden')
    
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
