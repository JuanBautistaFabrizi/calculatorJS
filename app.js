const numeros = document.querySelectorAll('.data-number');
const operadores = document.querySelectorAll('.data-opera');
const botonIgual = document.querySelector('.data-igual');
const botonDelete = document.querySelector('.data-delete');
const botonDelete2 = document.querySelector('.data-delete2');
const botonPunto = document.querySelector('.data-punto');

let resultado = document.getElementById('display');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

numeros.forEach((button) => {
    button.addEventListener('click', () => {
        agregarNumero(button.innerText);
    });
});

operadores.forEach((button) => {
    button.addEventListener('click', () => {
        selectOperacion(button.innerText);
    });
});

botonIgual.addEventListener('click', () => {
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', () => {
    clear();
    actualizarDisplay();
});

botonDelete2.addEventListener('click', () => {
    borrarDeUno();
});

botonPunto.addEventListener('click', () => {
    agregarNumero(botonPunto.innerText);
});

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function agregarNumero(e) {
    opeActual = opeActual.toString() + e.toString();
    actualizarDisplay();
}

function borrarDeUno () {
    opeActual = opeActual.split("");
    opeActual.pop();
    opeActual = opeActual.toString().replaceAll(",", "");
    actualizarDisplay();
}

function selectOperacion(e) {
    if (opeActual === '') {
        return;
    } else if (opeAnterior !== '') {
        calcular();
    }
    operacion = e.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);

    if (isNaN(anterior) || isNaN(actual)) {
        return;
    } else {
        switch (operacion) {
            case '+':
                calculo = anterior + actual;
                break;
            case '-':
                calculo = anterior - actual;
                break;
            case 'x':
                calculo = anterior * actual;
                break;
            case '/':
                calculo = anterior / actual;
                break;
            default:
                return;
        }
        opeActual = calculo;
        operacion = undefined;
        opeAnterior = '';
    }
}

function actualizarDisplay() {
    resultado.value = opeActual;
}

clear();