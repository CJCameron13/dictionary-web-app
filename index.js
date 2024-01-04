:root {
    --black: rgb(5,5,5);
    --very-dark-grey: rgb(31,31,31);
    --dark-grey: rgb(45,45,45);
    --less-dark-grey: rgb(58,58,58);
    --grey: rgb(117,117,117);
    --light-grey: rgb(233,233,233);
    --very-light-grey: rgb(244,244,244);
    --white: rgb(255,255,255);
    --purple: rgb(164,69,237);
    --red-orange: rgb(255,82,82);

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    /* height: 100%; */
    padding-top: 10vh;
}

.hidden {
    display: none;
}

#main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    max-width: 800px;
}

.sans-serif {
    font-family: "Inter", sans-serif;
}

.serif {
    font-family: 'Lora', serif;
}

.mono {
    font-family: 'Inconsolata';
}

#top-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

#top-row-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    position: relative;
}

#font-select {
    display: flex;
    gap: 10px;
}

#font-select:hover {
    cursor: pointer;
}

#selected-font {
    font-weight: 700;
}

#font-select-popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 45px;
    right: 50%;
    background-color: var(--white);
    width: 10vw;
    height: 15vh;
    padding: 10%;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 1px var(--light-grey);
}

#font-select-popup.hidden {
    display: none;
}

.font-option {
    font-weight: 700;
}

.font-option:hover {
    cursor: pointer;
    color: var(--purple);
}

#select-serif {
    font-family: 'Lora', serif;
}

#select-mono {
    font-family: 'Inconsolata';
}

#top-row-right .divider-line {
    height: 80%;
    width: 2px;
    background-color: var(--light-grey);
    margin: 0 10px;
}

#toggle {
    background-color: var(--grey);
    width: 35px;
    height: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding-left: 1px;
    padding-right: 1px;
}

#toggle-switch {
    background-color: var(--white);
    width: 13px;
    height: 13px;
    border-radius: 50%;
}

#toggle:hover {
    cursor: pointer;
    background-color: var(--purple);
}

#input-field {
    background-color: var(--light-grey);
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 10px;
    margin-top: 5vh;
}

#user-input {
    width: 90%;
    background-color: var(--light-grey);
    border-width: 0;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1rem;
}

#word-display {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 5vh;
}

h1 {
    font-size: 3rem;
}

#pronunciation {
    color: var(--purple);
}

.pos-divider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 5vh 0;
}

.pos {
    font-style: italic;
    font-size: 1.3rem;
    font-weight: 600;
}

.pos-divider .divider {
    height: 1px;
    background-color: var(--light-grey);
    width: 93%;
}

h4 {
    color: var(--grey);
    font-weight: 300;
    margin-bottom: 3vh;
}

ul {
    padding-inline-start: 5%;
    margin-bottom: 3vh;
}

li {
    margin-bottom: 1vh;
    color: var(--very-dark-grey);
}

li::marker {
    color: var(--purple);
}

.synonyms-container {
    display: flex;
    gap: 1vw;
}

.synonyms {
    color: var(--purple);
    font-weight: 700;
}

.example-item {
    padding-inline-start: 5%;
    color: var(--grey);
}

.bottom-divider {
    height: 1px;
    width: 100%;
    background-color: var(--light-grey);
    margin-top: 5vh;
    margin-bottom: 1vh;
}

.source {
    display: flex;
    gap: 1vw;
    margin-bottom: 10vh;
}

.source p {
    color: var(--grey);
    font-weight: 200;
    font-size: 0.8rem;
}

.source a {
    font-size: 0.8rem;
}

/* Dark mode styling */

body.dark-mode {
    background-color: var(--black);
}

.dark-mode h1 {
    color: var(--white);
}

.dark-mode #font-select p {
    color: var(--white);
}

.dark-mode #font-select-popup {
    background-color: var(--black);
    color: var(--white);
    box-shadow: 0px 0px 20px 1px var(--purple);
}

.dark-mode #top-row-right .divider-line {
    background-color: var(--dark-grey);
}

.dark-mode #toggle {
    background-color: var(--purple);
    justify-content: flex-end;
}

.dark-mode #input-field {
    background-color: var(--very-dark-grey);
}

.dark-mode #user-input {
    background-color: var(--very-dark-grey);
    color: var(--very-light-grey);
}

.dark-mode .pos {
    color: var(--white);
}

.dark-mode .divider {
    background-color: var(--dark-grey);
}

.dark-mode li {
    color: var(--light-grey);
}

.dark-mode .bottom-divider {
    background-color: var(--dark-grey);
}

