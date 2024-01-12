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

    //Test area for object looping

    let meaningsArray = data[0].meanings

    //console.log(meaningsArray)

    const posArray = meaningsArray.map(obj => obj.partOfSpeech)
    //console.log(posArray)

    const partOfSpeech = document.querySelectorAll('.pos')

    //console.log(partOfSpeech)

    let p = 0

    partOfSpeech.forEach((pos) => {
        pos.textContent = posArray[p]
        p++
    })

    //Test area end

    

    //List of definitions population
    
    const definitionList = document.querySelectorAll('.definition-list')
    
    let definitionsArray = meaningsArray.map(obj => obj.definitions)

    //console.log(definitionsArray)

    let d = 0

    definitionsArray.forEach((newArray) => {
        let list = newArray.map(obj => obj.definition)
        //console.log(list)
        list.forEach((def) => {
            let newItem = document.createElement('li')
            newItem.className = 'definition'
            definitionList[d].appendChild(newItem)
            newItem.textContent = def
    })

    d++
        
    })
    

    //End section

    //Synonyms population

    const synonyms = document.querySelectorAll('.synonyms')

    let synonymsArray = meaningsArray.map(obj => obj.synonyms)

    //console.log(synonymsArray)

    let s = 0

    synonyms.forEach((list) => {
        list.textContent = synonymsArray[s].join(', ')
        s++
    })

    //End section

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
    //console.log(audio[2])
    
    let b = 0
    while (audio[b] === '') {
        let newAudio = audio[b]
        b++
        console.log(newAudio)
    }

    

    playbackButton.addEventListener('click', () => {
        
    })
    
    
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic
    //partOfSpeechOne.textContent = data[0].meanings[0].partOfSpeech
        
    
    synonyms.textContent = data[0].meanings[0].synonyms.join(', ')
    
});

})

// `${data[0].meanings[0].definitions[def].definition}`
