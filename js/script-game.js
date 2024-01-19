/* -------------------- EGANDO VALOR DA TELA -------------------- */

$ = document.querySelector.bind(document); 
$$ = document.querySelectorAll.bind(document); 
print = console.log.bind(console)

// selecionando o elemento
let elemento = "#minha-div";

let larguraTELA = $(elemento).clientWidth;
let alturaTELA = $(elemento).clientHeight;

console.log('LARGURA: '+larguraTELA+'\n'+'ALTURA: '+alturaTELA);
// console.log(id_jogador);

/* -------------------- EFEITO DE CLICK NO BOTÃO -------------------- */
const sound = new Audio('./SOM/click.mp3')

document.getElementById('button-card-01').addEventListener('click', () => {
    sound.play();
})

document.getElementById('button-card-02').addEventListener('click', () => {
    sound.play();
})

/* -------------------- PEGANDO ELEMENTOS -------------------- */
/* JOGADOR */
const jogador = document.querySelector('.jogador');

/* PIPE = PC */
const pipe = document.querySelector('.pipe');

/* NUVEM */
const clouds = document.querySelector('.clouds');

/* AVIAO */
const aviao = document.querySelector('.aviao');

/* CARD */
const card = document.querySelector('.card');

/* CARD */
const teclaUP = document.querySelector('.tecla_up');

/* -------------------- ADICIONANDO PULO -------------------- */
const jump = () => {
    jogador.classList.add('jump');

    /* REMOVENDO PULO  */
    setTimeout(() => {
        jogador.classList.remove('jump');
    }, 500)
}

/* -------------------- ADICIONANDO AVIÃO -------------------- */
const aviaoLoop = setInterval(function() {

    aviao.style.display = 'block';
    console.log('Entrou no BLOCK');

    const loopAviao = setInterval(() => {

        const aviaoPositionn = aviao.offsetLeft;
        // const aviaoPositionn = +window.getComputedStyle(aviao).left.replace('px','');
        
        console.log(aviaoPositionn);
        
        const varTelaa = larguraTELA;
        if(aviaoPositionn >= varTelaa) {
            aviao.style.display = 'none';
            console.log('Entrou no NONE');

            clearInterval(loopAviao);
        }

        // clearInterval(loopAviao);

    },10);

}, 14000);


/* -------------------- ADICIONANDO LOOP PARA VERIFICAR SE O JOGADOR PERDEU -------------------- */
const loop = setInterval(() => {

    /* PEGANDO LOCALIZAÇÃO DO PC */
    const pipePosition = pipe.offsetLeft;

    /* PEGANDO LOCALIZAÇÃO DO JOGADOR */
    const jogadorPosition = +window.getComputedStyle(jogador).bottom.replace('px','');
    
    /* PEGANDO LOCALIZAÇÃO DA NUVEM */
    const cloudsPosition = clouds.offsetLeft;
    
    /* PEGANDO LOCALIZAÇÃO DO AVIAO */
    const aviaoPosition = aviao.offsetLeft;
    
    /* VERIFICANDO SE O PC PEGOU NO JOGADOR */
    if (pipePosition <= 120 && pipePosition > 17 && jogadorPosition < 80) {
        
        /* PARANDO PC NA POSIÇÃO DE GAMER HOVER */
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        /* PARANDO JOGADOR NA POSIÇÃO DE GAMER HOVER */
        jogador.style.animation = 'none';
        jogador.style.bottom = `${jogadorPosition}px`;

        /* PARANDO NUVEM NA POSIÇÃO DE GAMER HOVER */
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        /* PARANDO AVIAO NA POSIÇÃO DE GAMER HOVER */
        aviao.style.animation = 'none';
        aviao.style.left = `${aviaoPosition}px`;
        
        /* ALTERANDO GIF JOGADOR NO GAMER HOVER */
        if(id_jogadorr == 1) {
            jogador.src="./images/DUDU/DUDU_GAME-HOVER.gif";
        } else if (id_jogadorr == 2) {
            jogador.src="./images/FELIPE/FELIPE_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 3) {
            jogador.src="./images/JOSE/JOSE_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 4) {
            jogador.src="./images/RICARDO/RICARDO_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 5) {
            jogador.src="./images/CHOI/CHOI_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 6) {
            jogador.src="./images/ITALO/ITALO_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 7) {
            jogador.src="./images/FERNANDO/FERNANDO_GAME-HOVER_animated_GIF.gif";
        } else if (id_jogadorr == 8) {
            jogador.src="./images/BRUNO/BRUNO_GAME-HOVER_animated_GIF.gif";
        }

        /* ADICIONANDO CARD */
        card.style.display = 'block';

        /* PARANDO LOOP */
        clearInterval(loop);
        clearInterval(aviaoLoop);
    }

},10);

/* ADICIONANDO QUALQUER TECLA PARA PULAR */
document.addEventListener('keydown', jump);

document.addEventListener('click', jump);
