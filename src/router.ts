import { initHomePage } from "./pages/home";
import { initInstructionsPage } from "./pages/instructions";
import { initDuelPage } from "./pages/duel";
const BASE_PATH = "/desafio-m5";
function isGithubPages() {
    return location.host.includes("github.io");
  }

const routes = [
    {
        path: /\/home/,
        handler: initHomePage,
    },
    {
      path: /\/instructions/,
      handler: initInstructionsPage,
    },
    {
      path: /\/duel/,
      handler: initDuelPage,
    }
]

  
  export function initRouter(container: Element) {

    if (isGithubPages() || location.pathname !== "/") {
      goTo("/", container);
    }
    if (isGithubPages() || location.pathname == "/") {
      window.addEventListener("load", () => {
        goTo("/home", container);
      });
    }
    handleRoute(location.pathname, container);
}


function handleRoute(route: string, containerEl?: Element) {
  console.log("El handleRoute recibió una nueva ruta", route);
  console.log("El container recibido en handleRoute", containerEl);
//   window.onpopstate = function(){
//     handleRoute(location.pathname);
// };
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    // newRoute entonces ya no tiene el BASE_PATH
        // y podemos seguir procesando la ruta como siempre
        
        // resto del router...
    
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el: any = r.handler({ goTo: goTo });

        if (containerEl.firstChild) {
          containerEl.firstChild.remove();
        }

        containerEl.appendChild(el);
      }
    }
  }


  export function goTo(path:string, containerEl?:Element) {
      // el goTo va a recibir la ruta de siempre: /jugar
      // por eso, en el caso de GitHub Pages
      // debemos anteponerle el BASE_PATH para que funcione
      // en ese contexto
      const completePath = isGithubPages() ? BASE_PATH + path : path;
      history.pushState({}, "", completePath);
      handleRoute(completePath, containerEl);
    }