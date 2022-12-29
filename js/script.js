let statusLampada = '';
const lampada = document.getElementById('img-lampada');

const btnLigar = document.querySelector('#ligar');
const btnDesligar = document.querySelector('#desligar');

btnLigar.addEventListener('click', ligarLampada);
btnDesligar.addEventListener('click', desligarLampada);

lampada.addEventListener('mouseout', desligarLampada);
lampada.addEventListener('mouseenter', ligarLampada);
lampada.addEventListener('dblclick', quebrarLampada);


function ligarLampada() {

    if (statusLampada != 'quebrada') {

        lampada.setAttribute('src', 'img/ligada.jpg');
        statusLampada = 'ligada';

    }

}

function desligarLampada() {
    
    if (statusLampada != 'quebrada') {

        lampada.setAttribute('src', 'img/desligada.jpg');
        statusLampada = 'desligada';

    }

}

function quebrarLampada() {

    lampada.setAttribute('src', 'img/quebrada.jpg');
    statusLampada = 'quebrada';

}