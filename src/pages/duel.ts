import { goTo } from "../router";
import { state } from "../state";
export function initDuelPage(containerEl){
    var updatedState = state.getSate();
    
    const divEl = document.createElement("div");
    var style = document.createElement("style");
    const hands = {
        tijeras: require("url:../components/images/tijera.png"),
        piedra: require("url:../components/images/piedra.png"),
        papel: require("url:../components/images/papel.png")
    };
    //CSS
    style.textContent= `
   .duel{
        width: 100%;
        max-width: 700px;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        padding: 50px;
    }
    @media (min-width: 767px){
        .duel {
            margin: 0 auto;
            padding-top: 0;
        }
        .container__img{
            height: 200px;
        }
        .container{
            gap: 120px;
        }
    }
    .container{     
        display:flex;
        position: fixed;
        bottom: -56px;
        left: 50%;
        transform: translate(-50%, 0);
        justify-content: center;
        align-items: center;
        align-self: center;
        gap: 95px;
        margin: 0 auto;
        
        width: 100vw;
    }
    .container__img{
        cursor: pointer;
        position: relative;
        height: 20vh;   
        
        transition: transform 250ms;
    }
    .container__img:hover{
        transform: translateY(-50px);
        
    }
    @media (max-height: 367px){
        .container{
            display: none;
        }
    }
    @media (max-width: 460px){
        .container{
            justify-content: center;
            gap: 0;
        }
    }
    .computer-hand{
        position: relative;
        height: 25vh; 
        
        transform: rotate(180deg);
    }
    .computer-container{
        margin: 0 auto;
        display:flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        position: fixed;
        top: -12px;
    }
    .final__results{
        min-width: 370px;
        min-height: 37px;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       
        z-index: 10;
        margin: 0 auto;
        gap: 15px;
        transform: translate(-50%, -50%);
    }
    `;
    //HTML Interno del Div
    divEl.innerHTML = `
    <timer-el class="timer"></timer-el>
    <div class="container">
            <img class="container__img papel"src="${hands.papel}" id="papel">
            <img class="container__img piedra"src="${hands.piedra}" id="piedra">
            <img class="container__img tijera"src="${hands.tijeras}" id="tijera">
    </div>
        `;
        divEl.appendChild(style);
        //Se agrega la clase "duel" al div
         divEl.classList.add("duel");
    // ELECCIÓN DEL PLAYER
    var playerPlay = "";
    var papelHand = divEl.querySelector(".papel") as HTMLElement;
    var piedraHand = divEl.querySelector(".piedra") as HTMLElement;
    var tijeraHand = divEl.querySelector(".tijera") as HTMLElement;
    //Funciones para los eventListener (Está hecho así para mejor manipulación al finalizar el timer)
    var papelFunction = ()=>{
        playerPlay = "Papel";
        console.log("Clickeaste papel, playerPlay: ", playerPlay);
        (papelHand as HTMLElement).style.opacity = "1";
        (piedraHand as HTMLElement).style.opacity = "0.5";
        (tijeraHand as HTMLElement).style.opacity = "0.5";
    };
    var piedraFunction = ()=>{
        playerPlay = "Piedra";
        console.log("Clickeaste piedra,  playerPlay: ", playerPlay);
        (piedraHand as HTMLElement).style.opacity = "1";
        (papelHand as HTMLElement).style.opacity = "0.5";
        (tijeraHand as HTMLElement).style.opacity = "0.5";
    };
    var tijeraFunction = ()=>{
        playerPlay = "Tijeras";
        console.log("Clickeaste tijera, playerPlay: ", playerPlay);
        (tijeraHand as HTMLElement).style.opacity = "1";
        (piedraHand as HTMLElement).style.opacity = "0.5";
        (papelHand as HTMLElement).style.opacity = "0.5";
    };
    // EVENT LISTENERS.
    papelHand.addEventListener("click", papelFunction);
    piedraHand.addEventListener("click", piedraFunction);
    tijeraHand.addEventListener("click", tijeraFunction);
    
    //Numero randomizado y elección de la IA
        const generarAleatorio = (min, max) =>{
            return Math.floor(Math.random() * (max - min)) + min;
        };
         var randomNum = generarAleatorio(1, 10);
         var computerPlay = "";
         //Asigna piedra papel o tijera dependiendo del numero randomizado
         if (randomNum <= 3){
            computerPlay = "Papel";
         }
         else if (randomNum >= 4 && randomNum <= 6){
            computerPlay = "Piedra";
         }
         else if (randomNum >= 7 &&randomNum <=9){
            computerPlay = "Tijeras";
         };
         console.log("Este es el numero randomizado: ", randomNum)
         console.log("Soy la duelPage, esta es la computerPlay: ", computerPlay);
        
         //Setea la computerPlay en la updatedState
         updatedState.currentGame.computerPlay = computerPlay;
         console.log("updatedState from Duel, ", updatedState);
         //Chequea la jugada de la IA y devuelve la imagen de la mano correspondiente
         var computerImg = ()=>{
            if (computerPlay == "Tijeras"){
                return hands.tijeras;
            }
            else if (computerPlay == "Papel"){
                return hands.papel;
            }
            else if (computerPlay == "Piedra"){
                return hands.piedra;
            }
        };
         const computerHandEl = document.createElement("div");
         computerHandEl.classList.add("computer-container");
         computerHandEl.innerHTML= `
         <img class="computer-hand" src="${computerImg()}">
         `;


    let contador = 0;
    const intervalId = setInterval(()=>{
        contador++;
        console.log("Pasaron", contador, " segundos. PD SOY EL DUEL XD");
        //Al terminnar los 3 segundos...
        if (contador>2){
            //se termina el conteo 
            clearInterval(intervalId);
            let timer = divEl.querySelector(".timer") as HTMLElement;
            console.log("timer", timer);
            //Se elimina el timer
            timer.remove();
           
            //Se eliminan los eventListeners
            papelHand.removeEventListener("click", papelFunction);
            piedraHand.removeEventListener("click", piedraFunction);
            tijeraHand.removeEventListener("click", tijeraFunction);
            //Se muestra la mano de la IA
            divEl.appendChild(computerHandEl); 

            //La elección del player agregado al state 
            updatedState.currentGame.playerPlay = playerPlay;
            console.log("Current Game: ",updatedState.currentGame);
            //Se agrega el result-el
            
            var resultado:any;
            var colorCorrespondiente:any;

            var secondInterval = setInterval(()=>{
                var resultEl = document.createElement("div");
                resultEl.classList.add("final__results");
                resultEl.innerHTML=`
                <result-el></result-el>
                <score-el></score-el>
                <button-el class="button">Volver a jugar <button-el>
                `;
                var buttonEl = resultEl.querySelector(".button") as HTMLElement;
                console.log(buttonEl);
                
                var root = document.querySelector(".root") as HTMLElement;
                divEl.appendChild(resultEl);
                buttonEl.addEventListener("click", ()=>{
                        resultEl.remove();
                        goTo("/duel", root);
            });
                if (playerPlay == ""){
                    resultEl.style.background = "rgba(42, 40, 40, 0.8)";
                }
                else {
                    resultado = state.whoWins(computerPlay, playerPlay);
                    if(resultado == true){      
                        resultEl.style.background = "rgba(136, 137, 73, 0.8)";                 
                    }
                    else if(resultado == false){
                        resultEl.style.background = "rgba(137, 73, 73, 0.8)";
                         
                    }
                    else if (resultado == "Empate"){
                        resultEl.style.background = "rgba(42, 40, 40, 0.8)";
                    }
                }
                clearInterval(secondInterval);
            }, 700);
            
            state.setState(updatedState);
            
        }
    }, 1000);
    
    return divEl;
}