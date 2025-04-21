const body = document.body;
const div = document.querySelector('div');

body.onkeypress =function(event){
    // div.innerHTML += event.key;
    div.innerHTML = div.innerHTML +  event.key;
}