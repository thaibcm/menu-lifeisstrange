const imagens = [
    "./MaxJournal/86.png",
    "MaxJournal/87.png",
    "MaxJournal/88.png",
    "MaxJournal/89.png",
    "MaxJournal/90.png",

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
