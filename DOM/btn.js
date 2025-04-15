var btn = document.querySelector('button');
var i = 0;

// Clicking Event : 
btn.onclick = function (){
    i++;
    document.querySelector('div').innerHTML = i;
}