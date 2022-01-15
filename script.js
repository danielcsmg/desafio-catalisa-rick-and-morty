const imagemPersonagemUm = document.querySelector('#imagemPersonagemUm');
const imagemPersonagemDois = document.querySelector('#imagemPersonagemDois');
const imagemPersonagemTres = document.querySelector('#imagemPersonagemTres');

const nomePersonagemUm = document.querySelector('nomePersonagemUm');
const nomePersonagemDois = document.querySelector('nomePersonagemDois');
const nomePersonagemTres = document.querySelector('nomePersonagemTres');

const EspeciePersonagemUm = document.querySelector('EspeciePersonagemUm');
const EspeciePersonagemDois = document.querySelector('EspeciePersonagemDois');
const EspeciePersonagemTres = document.querySelector('EspeciePersonagemTres');

const condicaoPersonagemUm = document.querySelector('condicaoPersonagemUm');
const condicaoPersonagemDois = document.querySelector('condicaoPersonagemDois');
const condicaoPersonagemTres = document.querySelector('condicaoPersonagemTres');

const botao = document.querySelector('button');

pegarPersonagens = () => {
    return fetch(`https://rickandmortyapi.com/api/character/67,3,2`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        const dadosDosPersonagens = data;
        imagemPersonagemUm.src = dadosDosPersonagens[0].image;
        imagemPersonagemDois.src = dadosDosPersonagens[1].image;
        imagemPersonagemTres.src = dadosDosPersonagens[2].image;
    });
}

botao.onclick = pegarPersonagens
