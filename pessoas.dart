const imagens = [
    "./MaxJournal/1.png",
    "MaxJournal/2.png",
    "MaxJournal/3.png",
    "MaxJournal/4.png",
    "MaxJournal/5.png",
    "MaxJournal/6.png",
    "MaxJournal/7.png",
    "MaxJournal/8.png",
    "MaxJournal/9.png",
    "MaxJournal/10.png",
    "MaxJournal/11.png",
    "MaxJournal/12.png",
];

let index = 0; 

const img = document.getElementById("pageImage");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function atualizarImagem() {
    img.src = imagens[index];
}

prev.addEventListener("click", () => {
    index--;
    if (index < 0) index = imagens.length - 1; 
    atualizarImagem();
});

next.addEventListener("click", () => {
    index++;
    if (index >= imagens.length) index = 0; 
    atualizarImagem();
});
