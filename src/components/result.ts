import { goTo } from "../router";
import {state} from "../state";
    customElements.define("result-el", class extends HTMLElement{
    shadow = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        var updatedState = state.getSate();
        //Las imagenes para el resultado del duelo
        const resultadosImgs = {
            perdiste: require("url:./images/perdiste.png"),
            ganaste: require("url:./images/ganaste.png"),
            empate: require("url:./images/empate.png"),
        };
        var playerPlay = updatedState.currentGame.playerPlay;
        var computerPlay = updatedState.currentGame.computerPlay;
        var resultado: any;
        var imagenCorrespondiente: any;

        if (playerPlay == ""){
            resultado = "noEligio"
            imagenCorrespondiente = resultadosImgs.empate;
        }
        else {
            resultado = state.whoWins(computerPlay, playerPlay);
            if(resultado == true){
                state.data.score.player++
                imagenCorrespondiente = resultadosImgs.ganaste;
            }
            else if(resultado == false){
                state.data.score.computer++
                imagenCorrespondiente = resultadosImgs.perdiste;
            }
            else if (resultado == "Empate"){
                imagenCorrespondiente = resultadosImgs.empate;
            }
        }
        console.log("Resultado del component 'result': ", resultado);
        /*Función para poner la imagen correspondiente encima 
        del Score */
        /*Función para el color correspondiente en el background */
        var resultColorFunction = ()=>{
            if (resultado == true){
                return "rgba(136, 137, 73, 0.9);"
            }
            else if (resultado == false){
                return "rgba(137, 73, 73, 0.9)";;
            }
            else if (resultado == "Empate" || "noEligio"){
                return "#707c76;";
        }
    }
        //EL CSS DEL SHADOW
        var style = document.createElement("style");
        //CSS
        style.textContent = `
        .container__img{
            width: 363px;
            height: 362px;
        }
        `;
        this.shadow.innerHTML = `
            <img class="container__img"src="${imagenCorrespondiente}">
        `;
        this.shadow.appendChild(style);

    }
}
)