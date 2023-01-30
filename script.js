// let nome = prompt("Qual o seu nome?");

function itemSelectedModelo(pedidoClicado){
    console.log(pedidoClicado)
    const selected = document.querySelector('.selectedModelo');
    const model = document.querySelector(pedidoClicado);


    if(selected !== null){
        selected.classList.remove('selectedModelo');
    }
    model.classList.add('selectedModelo');
    buttonActive();
   
}

function itemSelectedGola(pedidoClicado2){
    console.log(pedidoClicado2)
    const selected = document.querySelector('.selectedGola');
    const gola = document.querySelector(pedidoClicado2)

    if(selected !== null){
        selected.classList.remove('selectedGola');
    }
    gola.classList.add('selectedGola');
    buttonActive();

}

function itemSelectedTecido(pedidoClicado3){
    
    const selected = document.querySelector('.selectedTecido');
    const tecido = document.querySelector(pedidoClicado3);


    if(selected !== null){
        selected.classList.remove('selectedTecido');
    }
    tecido.classList.add('selectedTecido');
    buttonActive();

}

function buttonActive(){
    const input = document.querySelector('input');
    const selectedModelo = document.querySelector('.selectedModelo');
    const selectedGola = document.querySelector('.selectedGola');
    const selectedTecido = document.querySelector('.selectedTecido');
    const button = document.querySelector('.button');
    
    if(selectedModelo !== null && selectedGola !== null && selectedTecido !== null && input.value !== null ){
        button.disabled = false;
        button.style.background = '#404EED';
        button.style.color = 'white';
        button.style.cursor = 'pointer';
    }
}
