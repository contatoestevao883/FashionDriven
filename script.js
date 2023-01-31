let nome = prompt("Qual o seu nome?");

function itemSelectedModelo(pedidoClicado){
    console.log(pedidoClicado)
    const selected = document.querySelector('.selectedModelo');
    const model = document.querySelector(pedidoClicado);


    if(selected !== null){
        selected.classList.remove('selectedModelo');
    }
    model.classList.add('selectedModelo');
}

function itemSelectedGola(pedidoClicado2){
    console.log(pedidoClicado2)
    const selected = document.querySelector('.selectedGola');
    const gola = document.querySelector(pedidoClicado2)

    if(selected !== null){
        selected.classList.remove('selectedGola');
    }
    gola.classList.add('selectedGola');

}

function itemSelectedTecido(pedidoClicado3){
    
    const selected = document.querySelector('.selectedTecido');
    const tecido = document.querySelector(pedidoClicado3);


    if(selected !== null){
        selected.classList.remove('selectedTecido');
    }
    tecido.classList.add('selectedTecido');
}

let input;
function onChange(value){
    if(value !== ""){
        buttonActive()
    }
}

function buttonActive(){
    const selectedModelo = document.querySelector('.selectedModelo');
    const selectedGola = document.querySelector('.selectedGola');
    const selectedTecido = document.querySelector('.selectedTecido');
    const button = document.querySelector('.button');
    
    if(selectedModelo !== null && selectedGola !== null && selectedTecido !== null){
        button.style.background = '#404EED';
        button.style.color = 'white';
        button.style.cursor = 'pointer';
        button.disabled = false;
    }
}
let modelo;
function materialModelo(materialEscolhido){
    console.log(materialEscolhido);
    modelo = materialEscolhido.querySelector('h3').innerText;
    console.log(modelo);

    if(modelo === 'T-shirt'){
        modelo = 't-shirt';
    }
    if(modelo === 'Camiseta'){
        modelo = 'top-tank';
    }
    if(modelo === 'Manga longa'){
        modelo = 'long';
    }

}
let gola 
function materialGola(materialEscolhido){
    console.log(materialEscolhido);
    gola = materialEscolhido.querySelector('h3').innerText;
    console.log(gola);

    if(gola === 'Gola V'){
        gola = 'v-neck';
    }
    if(gola === 'Gola Redonda'){
        gola = 'round';
    }
    if(gola === 'Gola polo'){
        gola = 'polo';
    }

}
let tecido 
function materialTecido(materialEscolhido){
    console.log(materialEscolhido);
    tecido = materialEscolhido.querySelector('h3').innerText;
    console.log(tecido);
    
    if(tecido === 'Seda'){
        tecido = 'silk';
    }
    if(tecido === 'Algodão'){
        tecido = 'cotton';
    }
    if(tecido === 'Poliéster'){
        tecido = 'polyester';
    }

}

function montarBlusa(){
    const newObject = {
		"id": number,
		"model": string,
		"neck": string,
		"material": string,
		"image": string,
		"owner": string,
		"author": string
	}

    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', newObject );
    promise.then((res) =>{
        console.log(res);
    })
    promise.catch((err) => {
        console.log(err);
    });

}

montarBlusa();

function mostrarBlusa(){
    const box = document.querySelector('.box');
    const inputValue = document.querySelector('input').value;

    const newObject = {
        "model": modelo,
        "neck": gola,
        "material": tecido,
        "image": inputValue,
        "owner": nome,
        "author": nome
    }
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', newObject)
    promise.then((res) =>{
        console.log(res)
        alert('Encomenda confirmada!!!')
    })
    promise.catch(error)
}

function error(erro){
    const statusCode = erro.response.status;
    console.log(erro);
    if ( statusCode === 422){
        alert('Ops, não conseguimos processar sua encomenda.');
    }
}