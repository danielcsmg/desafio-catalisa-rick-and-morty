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
    if (data.status == 'unknown') {
        return 'Não se sabe.'
    }else if(data.status == 'Alive'){
        return 'Sim.'
    }else{
        return 'Não. Está morto.'
    }
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

        condicaoPersonagemUm.innerHTML = traduzirCondicao(data[0]);
        condicaoPersonagemDois.innerHTML = traduzirCondicao(data[1]);
        condicaoPersonagemTres.innerHTML = traduzirCondicao(data[2]);
    });
}

botao.onclick = pegarPersonagens
