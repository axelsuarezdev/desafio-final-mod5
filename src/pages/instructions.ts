import { goTo } from "../router";
export function initInstructionsPage(containerEl){
    const divEl = document.createElement("div");
    var style = document.createElement("style");

    //CSS
    style.textContent= `
   .instructions{
        min-height: 600px;
        min-width: 500px;
        max-width: 700px;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        padding: 50px;
    }
    @media (min-width: 767px){
        .instructions {
            margin: 0 auto;
            padding-top: 0;
        }
    `;
    //HTML Interno del Div
    divEl.innerHTML = `
        <titletwo-el>Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos, si no llegas a elegir, el juego se expresará gráficamente y podrás volver a jugar.</titletwo-el>
        <button-el class="button">¡Jugar!</button-el>
        <choices-el></choices-el>
        `;
        divEl.appendChild(style);
        //Se agrega la clase "instructions" al div
    divEl.classList.add("instructions");
    const root = document.querySelector(".root");
    const jugarButton = divEl.querySelector(".button");
            console.log("Soy el 'instructions' usando el button component", jugarButton);
            jugarButton.addEventListener("click", ()=>{
                goTo("/duel", root);
            });
    return divEl;
}