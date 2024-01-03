<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">

  <link rel="stylesheet" href="styles.css">

  <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800&family=Inter:wght@100;200;300;400;500;600;700;800&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <title>Frontend Mentor | Dictionary web app</title>
</head>
<body>

  <div id="main-container" class="sans-serif">
    <div id="top-row">
      <img src="assets/images/logo.svg" alt="logo" id="logo">
      <div id="top-row-right">
        <div id="font-select">
          <p id="selected-font">Sans Serif<p>
          <img src="assets/images/icon-arrow-down.svg" alt="icon arrow down">
        </div>
        <div id="font-select-popup" class="hidden">
          <p class="font-option" id="select-sans">Sans Serif</p>
          <p class="font-option" id="select-serif">Serif</p>
          <p class="font-option" id="select-mono">Mono</p>
        </div>
        <div class="divider-line"></div>
        <div id="toggle">
          <div id="toggle-switch"></div>
        </div>
        <img src="assets/images/icon-moon.svg" id="dark-mode-icon" alt="dark mode icon">
      </div>
    </div>
    <div id="input-field">
      <form action="" id="input-form"><input type="text" name="word" id="user-input"></form>
      <img src="assets/images/icon-search.svg" alt="search icon">
    </div>
    <div id="word-display">
      <div id="word-and-pronunciation">
        <h1 id="word"></h1>
        <p id="pronunciation"></p>
      </div>
      <img id="playback-button" class="hidden" src="assets/images/icon-play.svg" alt="playback button">
    </div>
    <div class="boilerplate">
      <!-- <div class="pos-divider">
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
      </div> -->
    </div>
    <!-- <div class="pos-divider">
      <p class="pos">verb</p>
      <div class="divider"></div>
    </div>
    <div class="definition-container">
      <h4>Meaning</h4>
      <ul>
        <li>To type on a computer keyboard</li>
      </ul>
      <div class="example-sentence">
        <p class="example-item">"Keyboarding is the part of the job I hate the most</p>
      </div>
    </div> -->
    <div id="footer" class="hidden">
      <div class="bottom-divider"></div>
      <div class="source">
        <p>Source</p>
        <a>link</a>
        <img src="assets/images/icon-new-window.svg" alt="icon-new-window">
      </div>
    </div>
  </div>

  <script src="index.js"></script>
  <script src="dictionary.js"></script>

</body>
</html>
