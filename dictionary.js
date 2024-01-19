const form = document.querySelector('#input-form')
const word = document.querySelector('#word')
const pronunciation = document.querySelector('#pronunciation')
const playbackButton = document.querySelector('#playback-button')
const footerContainer = document.querySelector('#footer')
const boilerplate = document.querySelector('.boilerplate')
const errorContainer = document.querySelector('#error-container')
const searchIcon = document.querySelector('#search-icon')
const content = document.querySelector('#content')

//Prevent page refresh on submit

function submitForm(event){

    
    event.preventDefault();
 }

form.addEventListener('submit', submitForm)


//Primary functions to run on submit

form.addEventListener('submit', () => {
    boilerplate.innerHTML = ''
    let userInput = document.querySelector('#user-input').value
    userInput = userInput.trim()

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
.then(response => {
    if (!response.ok) {
        throw new Error('Not a word')
    }
    return response.json()
})
.then(data => {
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic

    function addBoilerplate() {
        let template = document.createElement('div');
        template.innerHTML = `<div class="pos-divider">
        <p class="pos" id="pos-one"></p>
        <div class="divider"></div>
      </div>
      <div class="definition-container">
        <h4>Meaning</h4>
        <ul class="definition-list">
      
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
    

    console.log(data)

    //Part of Speech population

    let meaningsArray = data[0].meanings

    const posArray = meaningsArray.map(obj => obj.partOfSpeech)
    
    const partOfSpeech = document.querySelectorAll('.pos')

    let p = 0

    partOfSpeech.forEach((pos) => {
        pos.textContent = posArray[p]
        p++
    })


    

    //List of definitions population
    
    const definitionList = document.querySelectorAll('.definition-list')
    
    let definitionsArray = meaningsArray.map(obj => obj.definitions)

    let d = 0

    definitionsArray.forEach((newArray) => {
        let list = newArray.map(obj => obj.definition)
        list.forEach((def) => {
            let newItem = document.createElement('li')
            newItem.className = 'definition'
            definitionList[d].appendChild(newItem)
            newItem.textContent = def
    })

    d++
        
    })
    

    

    //Synonyms population

    const synonyms = document.querySelectorAll('.synonyms')

    let synonymsArray = meaningsArray.map(obj => obj.synonyms)

    let s = 0

    synonyms.forEach((list) => {
        list.textContent = synonymsArray[s].join(', ')
        s++
    })

    

    //Footer

    footerContainer.classList.remove('hidden')

    let sourceUrl = data[0].sourceUrls[0]

    const sourceElement = document.querySelector('#source-link')
    sourceElement.textContent = sourceUrl

    const newTabLink = document.querySelector('#new-tab-link')
    newTabLink.setAttribute('href', sourceUrl)
    
    
    //Audio playback
    
    playbackButton.classList.remove('hidden')

    let audio = data[0].phonetics.map(obj => obj.audio)
    
    audio.forEach((source) => {
        if (source !== '') {
            audio = source
        }
    })

    let sound = new Audio(`${audio}`)

    playbackButton.addEventListener('click', () => {
        sound.play()
    })
    
})
.catch(error => {
    console.error(error)
    errorContainer.classList.remove('hidden')
})

})

//Search Icon functionality

searchIcon.addEventListener('click', () => {
    boilerplate.innerHTML = ''
    let userInput = document.querySelector('#user-input').value
    userInput = userInput.trim()

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
.then(response => {
    if (!response.ok) {
        throw new Error('Not a word')
    }
    return response.json()
})
.then(data => {
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic

    function addBoilerplate() {
        let template = document.createElement('div');
        template.innerHTML = `<div class="pos-divider">
        <p class="pos" id="pos-one"></p>
        <div class="divider"></div>
      </div>
      <div class="definition-container">
        <h4>Meaning</h4>
        <ul class="definition-list">
      
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
    

    console.log(data)

    //Part of Speech population

    let meaningsArray = data[0].meanings

    const posArray = meaningsArray.map(obj => obj.partOfSpeech)
    
    const partOfSpeech = document.querySelectorAll('.pos')

    let p = 0

    partOfSpeech.forEach((pos) => {
        pos.textContent = posArray[p]
        p++
    })


    

    //List of definitions population
    
    const definitionList = document.querySelectorAll('.definition-list')
    
    let definitionsArray = meaningsArray.map(obj => obj.definitions)

    let d = 0

    definitionsArray.forEach((newArray) => {
        let list = newArray.map(obj => obj.definition)
        list.forEach((def) => {
            let newItem = document.createElement('li')
            newItem.className = 'definition'
            definitionList[d].appendChild(newItem)
            newItem.textContent = def
    })

    d++
        
    })
    

    

    //Synonyms population

    const synonyms = document.querySelectorAll('.synonyms')

    let synonymsArray = meaningsArray.map(obj => obj.synonyms)

    let s = 0

    synonyms.forEach((list) => {
        list.textContent = synonymsArray[s].join(', ')
        s++
    })

    

    //Footer

    footerContainer.classList.remove('hidden')

    let sourceUrl = data[0].sourceUrls[0]

    const sourceElement = document.querySelector('#source-link')
    sourceElement.textContent = sourceUrl

    const newTabLink = document.querySelector('#new-tab-link')
    newTabLink.setAttribute('href', sourceUrl)
    
    
    //Audio playback
    
    playbackButton.classList.remove('hidden')

    let audio = data[0].phonetics.map(obj => obj.audio)
    
    audio.forEach((source) => {
        if (source !== '') {
            audio = source
        }
    })

    let sound = new Audio(`${audio}`)

    playbackButton.addEventListener('click', () => {
        sound.play()
    })
    
})
.catch(error => {
    console.error(error)
    errorContainer.classList.remove('hidden')
})

})
