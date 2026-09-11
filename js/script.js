import {vagas} from "./dados.js"

function criarCard (vaga) {
    const article = document.createElement('article');
    article.className = 'job-card';
    article.dataset.id = vaga.id;

    const badgeClass = {
        remote: 'job-card__badge--remote',
        presencial: 'job-card__badge--onsite',
        hibrido: 'job-card__badge--hybrid'
    }[vaga.tipo] || '';

    const tipoLabel = {
        remote: 'Remoto',
        presencial: 'Presencial',
        hibrido: 'Hibrido'
    }[vaga.tipo] || vaga.tipo;

    const header = document.createElement('div');
    header.className = 'job-card__header';

    const badge = document.createElement('span');
    badge.className = 'job-card__badge' + badgeClass;
    badge.textContent = tipoLabel;

    const title = document.createElement('h3');
    title.className = 'job-card__title';
    title.textContent = vaga.title;
    
    const company = document.createElement('p');
    company.className = 'job-card__company';
    company.textContent = vaga.empresa;

    header.append(badge, title, company);

    const body = document.createElement('div');
    body.className = 'job-card__body';

    



    return article;

}

function renderizarVagas(lista){
    const grid = document.getElementById('jobs-grid');
    grid.replaceChildren();

    if (lista.length == 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'empty-msg';
        emptyMsg.textContent = 'Nenhuma vaga encontrada.';
        grid.appendChild(emptyMsg)
        return;
    }

    const fragment = document.createDocumentFragment();
    lista.forEach(vaga => fragment.appendChild(criarCard(vaga)));    
    grid.appendChild(fragment);   
}

renderizarVagas(vagas);