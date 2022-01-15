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

traduzirCondicao = (data) => {
    const teste = data
    console.log(teste)
    return teste
}

pegarPersonagens = () => {
    return fetch(`https://rickandmortyapi.com/api/character/7,5,2`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemPersonagemUm.src = data[0].image;
        imagemPersonagemDois.src = data[1].image;
        imagemPersonagemTres.src = data[2].image;

        imagemPersonagemUm.alt = data[0].name;
        imagemPersonagemDois.alt = data[1].name;
        imagemPersonagemTres.alt = data[2].name;

        nomePersonagemUm.innerHTML = data[0].name;
        nomePersonagemDois.innerHTML = data[1].name;
        nomePersonagemTres.innerHTML = data[2].name;
        
        especiePersonagemUm.innerHTML = data[0].species;
        especiePersonagemDois.innerHTML = data[1].species;
        especiePersonagemTres.innerHTML = data[2].species;

        condicaoPersonagemUm.innerHTML = data[0].status;
        condicaoPersonagemDois.innerHTML = data[1].status;
        condicaoPersonagemTres.innerHTML = data[2].status;
    });
}

traduzirCondicao();
botao.onclick = pegarPersonagens
