import { state } from "../state";
    customElements.define("score-el", class Score extends HTMLElement{
        shadow = this.attachShadow({mode: "open"});
        constructor(){
            super();
            this.render();
        }
        render(){
            const updatedScore = state.getSate().score;
            console.log("Soy el Score del componente Score ", updatedScore);
            //EL CSS DEL SHADOW
            var style = document.createElement("style");
            //CSS
            style.textContent = `
             @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
            .container-main{
                padding: 15px 30px 30px 30px;
                box-sizing: border-box;
                background: #FFFFFF;
                border: 10px solid #000000;
                border-radius: 10px;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 350px;
                height: 270px;
                margin: 0 auto;
            }
            .container__title, container__score{
                font-family: 'Odibee Sans', cursive;
                font-style: normal;
                letter-spacing: 0.05em;
            }
            .container__title{
                margin: 0;
                margin-bottom: 15px;
                font-weight: 400;
                font-size: 55px;
                line-height: 61px;
            }
            .container__score{
                font-family: 'Odibee Sans', cursive;
                margin: 0px;
                font-weight: 400;
                font-size: 35px;
                line-height: 50px;
                align-self: flex-end;
            }
            `;
            this.shadow.innerHTML = `
            <div class="container-main">
                <h2 class="container__title">Score</h2>
                <h3 class="container__score">Vos: ${updatedScore.player}</h3>
                <h3 class="container__score">Máquina: ${updatedScore.computer}</h3>
            </div>
            `;
            this.shadow.appendChild(style);
        }
    });
