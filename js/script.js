/* -------------------- PEGANDO ELEMENTOS -------------------- */

/* DIV - BOTÃO*/
const DIVbuttonn = document.querySelector('.buttonn');

/* DIV - LOJA */
const DIVloja = document.querySelector('.div-loja');

/* -------------------- EFEITO DE CLICK NO BOTÃO -------------------- */
const sound = new Audio('./SOM/click.mp3')

document.getElementById('button-01').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-02').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-03').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-01').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-02').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-03').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-04').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-05').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-06').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-07').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-loja-08').addEventListener('click', () => {
    sound.play();
})

/* -------------------- MOSTRAR / OCULTAR ELEMENTOS AO CLICAR NA LOJA -------------------- */
/* BOTÃO - JOGAR/LOJA */
function toggleInformation() {

    /* OCULTAR */
    if (DIVbuttonn.style.display === 'none') {

        DIVbuttonn.style.display = 'block';

    } else {

        DIVbuttonn.style.display = 'none';
    }

    /* MOSTRAR */
    if (DIVloja.style.display === 'block') {

        DIVloja.style.display = 'none';

    } else {

        DIVloja.style.display = 'block';
    }
}

function toggleInformationVoltar() {

    /* OCULTAR */
    if (DIVbuttonn.style.display === 'block') {

        DIVbuttonn.style.display = 'none';

    } else {

        DIVbuttonn.style.display = 'block';
        DIVbuttonn.style.display = 'flex';
    }

    /* MOSTRAR */
    if (DIVloja.style.display === 'none') {

        DIVloja.style.display = 'block';

    } else {

        DIVloja.style.display = 'none';
    }

}