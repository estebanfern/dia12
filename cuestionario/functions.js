function raizPositiva(a, b, c) {
    return (-b + Math.sqrt(b**2 - 4*a*c))/2*a;
}

function raizNegativa(a, b, c) {
    return (-b - Math.sqrt(b**2 - 4*a*c))/2*a;
}

function textInner(id) {
    document.getElementById(id).innerHTML = document.getElementById("input").value;
}

function randomInner(){
    document.getElementById("rd").innerHTML = Math.round(Math.random()*100 + 1);   
}

//console.log(raizPositiva(1, -4, 0));
//console.log(raizNegativa(1, -4, 0));

