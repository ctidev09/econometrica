//import languages
const imports = (url) => {
  var script = document.createElement('script');
  var parentScript = document.getElementById('translate');
  parentScript = parentScript.src;
  parentScript = parentScript.split('/');
  parentScript.pop();
  parentScript = parentScript.join();
  parentScript = parentScript.replace(/,/gi, '/');
  script.src = parentScript+'/'+url;
  var body = document.body;
  body.appendChild(script);
}

imports('languajes.js');

// function change language
const changeLanguage = () => {
  language_selected = select.value

  elements = document.querySelectorAll('[data-lang]')
  elements.forEach( element => {
    current_attr = element.getAttribute('data-lang')
    element.innerHTML = lenguajes[ language_selected ][current_attr]
  })
}

//get select of languajes
select = document.getElementById('lang_select')

//change language with select change
select.addEventListener('change', changeLanguage);


