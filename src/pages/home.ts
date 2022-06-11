import { goTo } from "../router";
export function initHomePage(containerEl){
    const divEl = document.createElement("div");
    var style = document.createElement("style");

    //CSS
    style.textContent= `
    @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
    .home{
        height: 100%;
        width: 100%;
        max-width: 80%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        padding: 50px;
        gap: 50px;
    }
    @media (min-width: 767px){
        .home {
            margin: 0 auto;
            
            max-width: 50%
        }

    `;
    //HTML Interno del Div
    divEl.innerHTML = `
        <titleone-el class="h1">Piedra Papel <span class="span">o</span> Tijeras</titleone-el>
        <button-el class="button">Empezar</button-el>
        <choices-el></choices-el>
        `;
        divEl.appendChild(style);
        //Se agrega la clase "home" al div
    divEl.classList.add("home");
    //CLICK EMPEZAR
    const root = document.querySelector(".root") as Element;
    const empezarButton = divEl.querySelector(".button") as Element;
            console.log("Soy el home usando el button component", empezarButton);
            empezarButton.addEventListener("click", ()=>{
                goTo("/instructions", root);
            });
    return divEl;
}