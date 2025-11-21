const imagens = [
    "./MaxJournal/13.png",
    "MaxJournal/14.png",
    "MaxJournal/15.png",
    "MaxJournal/16.png",
    "MaxJournal/17.png",
    "MaxJournal/18.png",
    "MaxJournal/19.png",
    "MaxJournal/20.png",
    "MaxJournal/21.png",
    "MaxJournal/22.png",
    "MaxJournal/23.png",
    "MaxJournal/24.png",
    "MaxJournal/25.png",
    "MaxJournal/26.png",
    "MaxJournal/27.png",
    "MaxJournal/28.png",
    "MaxJournal/29.png",
    "MaxJournal/30.png",
    "MaxJournal/31.png",
    "MaxJournal/32.png",
    "MaxJournal/33.png",
    "MaxJournal/34.png",
    "MaxJournal/35.png",
    "MaxJournal/36.png",
    "MaxJournal/37.png",
    "MaxJournal/38.png",
    "MaxJournal/39.png",
    "MaxJournal/40.png",
    "MaxJournal/41.png",
    "MaxJournal/42.png",
    "MaxJournal/43.png",
    "MaxJournal/44.png",
    "MaxJournal/45.png",
    "MaxJournal/46.png",
    "MaxJournal/47.png",
    "MaxJournal/48.png",
    "MaxJournal/49.png",
    "MaxJournal/50.png",
    "MaxJournal/51.png",
    "MaxJournal/52.png",
    "MaxJournal/53.png",
    "MaxJournal/54.png",
    "MaxJournal/55.png",
    "MaxJournal/56.png",
    "MaxJournal/57.png",
    "MaxJournal/58.png",
    "MaxJournal/59.png",
    "MaxJournal/60.png",
    "MaxJournal/61.png",
    "MaxJournal/62.png",
    "MaxJournal/64.png",
    "MaxJournal/65.png",
    "MaxJournal/66.png",
    "MaxJournal/67.png",
    "MaxJournal/68.png",
    "MaxJournal/69.png",
    "MaxJournal/71.png",
    "MaxJournal/72.png",
    "MaxJournal/73.png",
    "MaxJournal/74.png",
    "MaxJournal/75.png",
    "MaxJournal/76.png",
    "MaxJournal/77.png",
    "MaxJournal/78.png",
    "MaxJournal/79.png",
    "MaxJournal/80.png",
    "MaxJournal/81.png",
    "MaxJournal/82.png",
    "MaxJournal/83.png",
    "MaxJournal/84.png",
    "MaxJournal/85.png",
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
