import { initRouter } from "./router"
import { state } from "./state";
// Components
import "./components/dropmenu";
import "./components/button";
import "./components/choices";
import "./components/result";
import "./components/score";
import "./components/title-one";
import "./components/title-two";
import "./components/timer";
(function(){
    const root = document.querySelector(".root");
    initRouter(root);
    state.init();
    // console.log("SOY EL INDEX.TS PROBANDO KOSASZSZ");
    // const computerPlay = "Piedra";
    // const playerPlay = "Papel";
    // const resultado = state.whoWins(computerPlay, playerPlay);
    // console.log("El resultado es ", resultado);
    // ANDA :D
})();