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
  localStorage.setItem('select_language', language_selected)
  console.log("change", language_selected, select.value)
  setTimeout(() => {
    console.log("a pintar", language_selected)
    elements = document.querySelectorAll('[data-lang]')
    elements.forEach( element => {
      current_attr = element.getAttribute('data-lang')
      element.innerHTML = lenguajes[ language_selected ][current_attr]
    })
  }, 10);
}

//get select of languajes
select = document.getElementById('lang_select')


//change language with select change
select.addEventListener('change', changeLanguage);


console.log("carga:", localStorage.getItem('select_language'))
if(localStorage.getItem('select_language') !== null){
  console.log("entra a change")
 // select.value = localStorage.getItem('select_language')
 $('#lang_select').val(localStorage.getItem('select_language'))
  changeLanguage();
  console.log("val:", select.value)
 /* $('#lang_select').trigger('change')*/
}