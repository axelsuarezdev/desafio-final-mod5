 customElements.define("titletwo-el", class extends HTMLElement{
        shadow = this.attachShadow({mode: "open"});
        constructor(){
            super();
            this.render();
        }
        render(){
            //EL CSS DEL SHADOW
            var style = document.createElement("style");
            //CSS
            style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
           .title-two{
                align-self: center;
                max-width: 80%;
                font-family: 'Permanent Marker', cursive;
                font-style: normal;
                font-weight: 600;
                font-size: 2rem;
                line-height: 100%;
                /* or 40px */
                text-align: center;
                color: #000000;
                margin: 0 auto;
            }
            @media (min-width: 767px){
             .title-two {
                max-width: 60%;
             }
            }
            `;
            this.shadow.innerHTML = `
            <h2 class="title-two">${this.textContent}</h2>
            `
            this.shadow.appendChild(style);
        }
    });
