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
    

    console.log(data[0].meanings.length)

    //Test area for object looping

    let meaningsArray = data[0].meanings

    console.log(meaningsArray)

    const posArray = meaningsArray.map(obj => obj.partOfSpeech)
    console.log(posArray)

    const partOfSpeech = document.querySelectorAll('.pos')

    console.log(partOfSpeech)

    let p = 0

    partOfSpeech.forEach((pos) => {
        pos.textContent = posArray[p]
        p++
    })

    //Test area end

    //List of definitions population
    
    const definitionList = document.querySelectorAll('.definition-list')
    
    let definitionsArray = meaningsArray.map(obj => obj.definitions)

    console.log(definitionsArray)

    definitionsArray.forEach((newArray) => {
        let list = newArray.map(obj => obj.definition)
        //console.log(list)
        let i = 0
        while (i < list.length) {
            console.log(list[i])
            i++
        }
    })

    //End section


    const synonyms = document.querySelector('.synonyms')


    
        
    
    playbackButton.classList.remove('hidden')
    footerContainer.classList.remove('hidden')
    
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic
    //partOfSpeechOne.textContent = data[0].meanings[0].partOfSpeech
        
    
    synonyms.textContent = data[0].meanings[0].synonyms.join(', ')
    
});

})

// `${data[0].meanings[0].definitions[def].definition}`
