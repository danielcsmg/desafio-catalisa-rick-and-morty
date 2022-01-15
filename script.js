const imagemPersonagemUm = document.querySelector('#imagemPersonagemUm');
const imagemPersonagemDois = document.querySelector('#imagemPersonagemDois');
const imagemPersonagemTres = document.querySelector('#imagemPersonagemTres');

const nomePersonagemUm = document.querySelector('#nomePersonagemUm');
const nomePersonagemDois = document.querySelector('#nomePersonagemDois');
const nomePersonagemTres = document.querySelector('#nomePersonagemTres');

const especiePersonagemUm = document.querySelector('#especiePersonagemUm');
const especiePersonagemDois = document.querySelector('#especiePersonagemDois');
const especiePersonagemTres = document.querySelector('#especiePersonagemTres');

const condicaoPersonagemUm = document.querySelector('#condicaoPersonagemUm');
const condicaoPersonagemDois = document.querySelector('#condicaoPersonagemDois');
const condicaoPersonagemTres = document.querySelector('#condicaoPersonagemTres');

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

        imagemPersonagemUm.alt = dadosDosPersonagens[0].name;
        imagemPersonagemDois.alt = dadosDosPersonagens[1].name;
        imagemPersonagemTres.alt = dadosDosPersonagens[2].name;

        nomePersonagemUm.innerHTML = dadosDosPersonagens[0].name;
        nomePersonagemDois.innerHTML = dadosDosPersonagens[1].name;
        nomePersonagemTres.innerHTML = dadosDosPersonagens[2].name;
        
        especiePersonagemUm.innerHTML = dadosDosPersonagens[0].species;
        especiePersonagemDois.innerHTML = dadosDosPersonagens[1].species;
        especiePersonagemTres.innerHTML = dadosDosPersonagens[2].species;

        condicaoPersonagemUm.innerHTML = dadosDosPersonagens[0].status;
        condicaoPersonagemDois.innerHTML = dadosDosPersonagens[1].status;
        condicaoPersonagemTres.innerHTML = dadosDosPersonagens[2].status;
    });
}

botao.onclick = pegarPersonagens
