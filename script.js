const temporadas = [
    { nome: "Temporada 1", img: "life_is_strange_img/BTS_life_is_strange.webp" },
    { nome: "Temporada 2", img: "life_is_strange_img/LiS2_Complete_Season_Art.webp" },
    { nome: "Temporada 3", img: "life_is_strange_img/TC_life_is_strange.webp" }
];

// Renderiza capas
const container = document.getElementById("seasons-container");

temporadas.forEach(temp => {
    const div = document.createElement("div");
    div.classList.add("box");

    div.innerHTML = `<img src="${temp.img}" alt="${temp.nome}">`;

    container.appendChild(div);
});

// Créditos 
const creditos = [
    { nome: "Ana Luiza Leandro", funcao: "Documentação" },
    { nome: "Ellen Danielly", funcao: "Desenvolvimento da tela inicial" },
    { nome: "Maria Carolina Cordeiro", funcao: "Direção e desenvolvimento" },
    { nome: "Rogério Antônio Bernardo", funcao: "Desenvolvimento dos personagens" },
    { nome: "Thaiane Barros", funcao: "Desenvolvimento da Tela final" }
];

const lista = document.getElementById("creditos");

creditos.forEach(c => {
    const p = document.createElement("p");
    p.textContent = `${c.nome} — ${c.funcao}`;
    lista.appendChild(p);
});
