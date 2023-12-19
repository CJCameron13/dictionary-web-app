const form = document.querySelector('#input-form')
const word = document.querySelector('#word')
const pronunciation = document.querySelector('#pronunciation')

function submitForm(event){

    //Preventing page refresh
    event.preventDefault();
 }

form.addEventListener('submit', submitForm)

form.addEventListener('submit', () => {
    console.log('submitted')
    const userInput = document.querySelector('#user-input').value
    console.log(userInput)

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    word.textContent = data[0].word
    pronunciation.textContent = data[0].phonetic
});

})