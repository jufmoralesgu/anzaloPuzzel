var numeros = document.getElementById("num");
var letras = document.getElementById("lett");
// var n= new Array[9];
// for (let i = 0; index < n.length; i++) {
//     n[i]=numeros;
//     console.log(n);
// }

function bo1() {
    let aux = numeros.innerText;
    if (aux == '') {
        numeros.innerHTML = "1";
    }
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        letras.innerHTML = "A";
    }
}
function bo2() {
    let aux = numeros.innerText;

    if (aux == 1) {
        numeros.innerHTML = "1, 2";

    } else if (aux == '') {
        alert("falta un número ! (1)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A') {
        letras.innerHTML = "A, B";

    } else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == '') {
        alert("Falta una letra (A)")
    }

}
function bo3() {
    let aux = numeros.innerText;
    if (aux == '1, 2') {
        numeros.innerHTML = "1, 2, 3";
    } else if (aux == '') { alert("faltan dos números ! (1, 2)") }
    else if (aux != '1, 2' && aux != '1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("falta un numero! (2)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B') {
        letras.innerHTML = "A, B, C";
    } else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B') {
        alert("falta aguna letra entre A y B")
    }


}


function bo4() {
    let aux = numeros.innerText;
    if (aux == '1, 2, 3') {

        numeros.innerHTML = "1, 2, 3, 4";
    } else if (aux !='1, 2, 3' && aux != '1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan tres números ! (1, 2, 3)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C') {
        letras.innerHTML = "A, B, C, D";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C') {

        alert("falta aguna letra entre A y C")
    }
}
function bo5() {
    let aux = numeros.innerText;
    if (aux == '1, 2, 3, 4') {

        numeros.innerHTML = "1, 2, 3, 4, 5";

    } else if(aux !='1, 2, 3, 4' && aux != '1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan cuatro números ! (1, 2, 3, 4)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D') {
        letras.innerHTML = "A, B, C, D, E";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D') {
        alert("falta aguna letra entre A y D")
        
    }

}
function bo6() {

    let aux = numeros.innerText;
    if (aux == '1, 2, 3, 4, 5') {

        numeros.innerHTML = "1, 2, 3, 4, 5, 6";

    } else if(aux!='1, 2, 3, 4, 5' && aux !='1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan cinco números ! (1, 2, 3, 4, 5)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D, E') {
        letras.innerHTML = "A, B, C, D, E, F";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D, E') {
        alert("falta aguna letra entre A y E")
        
    }

}
function bo7() {


    let aux = numeros.innerText;
    if (aux == '1, 2, 3, 4, 5, 6') {

        numeros.innerHTML = "1, 2, 3, 4, 5, 6, 7";

    } else if(aux!='1, 2, 3, 4, 5, 6' && aux !='1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan seis números ! (1, 2, 3, 4, 5, 6)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D, E, F') {
        letras.innerHTML = "A, B, C, D, E, F, G";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D, E, F') {
        alert("falta aguna letra entre A y F")
        
    }

}

function bo8() {

    let aux = numeros.innerText;

    if (aux == '1, 2, 3, 4, 5, 6, 7') {

        numeros.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8";

    } else if(aux!='1, 2, 3, 4, 5, 6, 7' && aux !='1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan siete números ! (1, 2, 3, 4, 5, 6, 7)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D, E, F, G') {
        letras.innerHTML = "A, B, C, D, E, F, G, H";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D, E, F, G') {
        alert("falta aguna letra entre A y G")
        
    }
}

function bo9() {
    let aux = numeros.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8') {

        numeros.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9";

    } else if(aux!='1, 2, 3, 4, 5, 6, 7, 8' && aux !='1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan ocho números ! (1, 2, 3, 4, 5, 6, 7, 8)")
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D, E, F, G, H') {
        letras.innerHTML = "A, B, C, D, E, F, G, H, I";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D, E, F, G, H') {
        alert("falta aguna letra entre A y H")
        
    }
}

function bo0() {
    let aux = numeros.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9') {

        numeros.innerHTML = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";

    } else if(aux!='1, 2, 3, 4, 5, 6, 7, 8, 9' && aux !='1, 2, 3, 4, 5, 6, 7, 8, 9, 0') {
        alert("faltan nueve números ! (1, 2, 3, 4, 5, 6, 7, 8, 9)");
    }
    let auxi = letras.innerText;
    if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi == 'A, B, C, D, E, F, G, H, I') {
        letras.innerHTML = "A, B, C, D, E, F, G, H, I, J";
    }else if (aux == '1, 2, 3, 4, 5, 6, 7, 8, 9, 0' && auxi != 'A, B, C, D, E, F, G, H, I') {
        alert("falta aguna letra entre A y I")
        
    }
}