
const nextFirts = document.querySelector('#nextFirts'); //next firts
const prevSec = document.querySelector('#prevSec'); //prev Sec 
const nextSec = document.querySelector('#nextSec'); //next Sec
const prevThird = document.querySelector('#prevThird'); //prev Third
var atual, prev, next;
var i = 1;

//firts
nextFirts.onclick = function() {
    atual =  (this.parentNode).parentNode; //pegando elemento pai
    next = atual.nextElementSibling; //pegando o proximo elemento

    atual.classList.remove("active"); // hide
    next.classList.add("active"); //show

    var progress = document.querySelector('#progress'); //progress
    progress = progress.children[i]; //progress
    progress.classList.add("active-progress") //progress
    i++;
}

//sec
prevSec.onclick = function() {
    atual =  (this.parentNode).parentNode; //pegando elemento pai
    prev = atual.previousElementSibling; //pegando o proximo elemento
    
    atual.classList.remove("active"); // hide
    prev.classList.add("active"); //show

    var progress = document.querySelector('#progress'); //progress
    progress = progress.children[i-1];
    progress.classList.remove("active-progress")
    i--;
}

nextSec.onclick = function() {
    atual =  (this.parentNode).parentNode; //pegando elemento pai
    next = atual.nextElementSibling; //pegando o proximo elemento
    
    atual.classList.remove("active"); // hide
    next.classList.add("active"); //show
    
    var progress = document.querySelector('#progress'); //progress
    progress = progress.children[i]; //progress
    progress.classList.add("active-progress") //progress
    i++    
}

//third
prevThird.onclick = function() {
    atual =  (this.parentNode).parentNode; //pegando elemento pai
    prev = atual.previousElementSibling; //pegando o proximo elemento

    atual.classList.remove("active"); // hide
    prev.classList.add("active"); //show

    var progress = document.querySelector('#progress'); //progress
    progress = progress.children[i-1];
    progress.classList.remove("active-progress")
    i--;
}
