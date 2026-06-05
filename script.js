const displayTempo = document.getElementById("tempo");
const botaoFoco = document.querySelector("button");
let minutos = 25;
let segundos = 0;
let cronometro;

function atualizarCronometro() {
    if (segundos === 0) {
        if (minutos === 0) {
            clearInterval(cronometro);
            cronometro = null; 
            
            
            alert("Ciclo de cultivo concluído! Hora de colher os frutos do seu foco."); 
            return;
        }
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }

    let minTexto = minutos < 10 ? "0" + minutos : minutos;
    let segTexto = segundos < 10 ? "0" + segundos : segundos;

    displayTempo.innerText = `${minTexto}:${segTexto}`;
}

botaoFoco.addEventListener("click", function() {
    if (cronometro) return; 

    cronometro = setInterval(atualizarCronometro, 1000);
});
