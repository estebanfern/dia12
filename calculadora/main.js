var temp = 0;
var operation = 0;

function addNumber(num) {
    document.getElementById("ds").value = parseFloat(document.getElementById("ds").value + num); 
}

function addPunto() {
    let disp = String(document.getElementById("ds").value);
    if (!disp.includes(".")){
        disp = disp + "."
    }
    document.getElementById("ds").value = disp;
}

function atras() {
    let disp = String(document.getElementById("ds").value);
    let res = disp.substring(0, disp.length-1);
    if (res.length > 0){
        document.getElementById("ds").value = res;
    }else{
        document.getElementById("ds").value = 0;
    }
}

function clearDisplay() {
    document.getElementById("ds").value = 0;
    operation = 0;
    temp = 0;
}

function sumar() {
    temp = parseFloat(document.getElementById("ds").value);
    document.getElementById("ds").value = 0;
    operation = 1;
}

function restar() {
    temp = parseFloat(document.getElementById("ds").value);
    document.getElementById("ds").value = 0;
    operation = 2;
}

function multiplicar(){
    temp = parseFloat(document.getElementById("ds").value);
    document.getElementById("ds").value = 0;
    operation = 3;
}

function dividir(){
    temp = parseFloat(document.getElementById("ds").value);
    document.getElementById("ds").value = 0;
    operation = 4;
}




function resultado() {
    let num = parseFloat(document.getElementById("ds").value);
    if (operation == 1){
        document.getElementById("ds").value = temp + num;
    }else if (operation == 2){
        document.getElementById("ds").value = temp - num;
    }else if (operation == 3){
        document.getElementById("ds").value = temp * num;
    }else if (operation == 4){
        document.getElementById("ds").value = temp / num;
    }
    temp = 0;
    operation = 0;
}

