
function changeSize(){
    var paragraph = document.getElementById("para");
    paragraph.classList.toggle("isBold");
}
function changeStyle(){
    var paragraph = document.getElementById("para");
    paragraph.classList.toggle("isItalic");
}
function changeUnderline(){
    var paragraph = document.getElementById("para");
    paragraph.classList.toggle("isUnderLined");
}

function myFunction(){
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("open");
}

function applyF1(){
    var elem = document.getElementById("para");
    elem.classList.toggle("f1");
    elem.classList.remove("f2");
    elem.classList.remove("f3");
}
function applyF2(){
    var elem = document.getElementById("para");
    elem.classList.toggle("f2");
    elem.classList.remove("f1");
    elem.classList.remove("f3");
}

function applyF3(){
    var elem = document.getElementById("para");
    elem.classList.toggle("f3");
    elem.classList.remove("f1");
    elem.classList.remove("f2");
}


function myFunction2(){
    var dropdown = document.getElementById("myDropdown2");
    dropdown.classList.toggle("play");
}
function applyFa(){
    var elem = document.getElementById("para");
    elem.classList.toggle("fa");
    elem.classList.remove("fb");
    elem.classList.remove("fc");
}
function applyFb(){
    var elem = document.getElementById("para");
    elem.classList.toggle("fb");
    elem.classList.remove("fa");
    elem.classList.remove("fc");
}

function applyFc(){
    var elem = document.getElementById("para");
    elem.classList.toggle("fc");
    elem.classList.remove("fa");
    elem.classList.remove("fb");
}

