import { url } from "inspector";    
    customElements.define("choices-el", class extends HTMLElement{
        shadow = this.attachShadow({mode: "open"});
        constructor(){
            super();
            this.render();
        }
        render(){
            const imgPapelURL = require("url:./images/papel.png")
            const imgPiedraURL = require("url:./images/piedra.png")
            const imgTijeraURL = require("url:./images/tijera.png")

            //EL CSS DEL SHADOW
            var style = document.createElement("style");
            //CSS
            style.textContent = `
            .container{     
                display:flex;
                position: fixed;
                bottom: -56px;
                left: 50%;
                transform: translate(-50%, 0);
                justify-content: center;
                align-items: center;
                align-self: center;
                gap: 65px;
                margin: 0 auto;
            }
            .container__img{
                position: relative;
                height: 150px;   
                transition: transform 250ms;
            }
            .container__img:hover{
                transform: translateY(-34px);
                
            }
            @media (min-width: 767px){
                .container__img{
                    height: 200px;
                }
                .container{
                    gap: 120px;
                }
            }
            @media (max-height: 367px){
                .container{
                    display: none;
                }
            }
            
            `;
            this.shadow.innerHTML = `
            <div class="container">
             <img class="container__img"src="${imgPapelURL}" id="papel">
             <img class="container__img"src="${imgPiedraURL}" id="piedra">
             <img class="container__img"src="${imgTijeraURL}" id="tijera">
            </div>
            `
            this.shadow.appendChild(style);
        }
    });