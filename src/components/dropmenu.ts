customElements.define("menu-el", class extends HTMLElement{
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
        #navMenu{
            cursor: pointer;
            width: 30px;
        }
        #navMenu > span{
            display: block;
            width: 28px;
            height: 2px;
            border-radius: 9999px;
            background-color: black;
        }
        #navMenu >span:not(:last-child){
            margin-bottom: 7px;
        }
        #navMenu, #navMenu>span{
            transition: all .4s ease-in-out;
        }

        #navMenu.active{
            transition-delay: 0.8s;
            transform: rotate(45deg);
        }
        #navMenu.active > span:nth-child(2){
            width: 0;
        }
        #navMenu.active > span:nth-child(1), #navMenu.active > span.nth-child(3){
            transition-delay: .4s
        }
        #navMenu.active > span:nth-child(1){
            transform: translateY(9px);
        }
        #navMenu.active > span:nth-child(3){
            transform: translateY(-9px) rotate(90deg);
        }
        `;
        this.shadow.innerHTML = `
        <div id="navMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        `
        this.shadow.appendChild(style);
        const navMenu = this.shadow.querySelector("#navMenu");
        navMenu.addEventListener("click", ()=>{
            navMenu.classList.toggle("active");
        });
        console.log("Soy el menu component");
    }
});
