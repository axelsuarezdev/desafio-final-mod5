import { initRouter } from "./router"
import { state } from "./state";
// Components
import "./components/button";
import "./components/choices";
import "./components/result";
import "./components/score";
import "./components/title-one";
import "./components/title-two";
import "./components/timer";
(function(){
    const root = document.querySelector(".root") as Element;
    initRouter(root);
    state.init();
    
})();