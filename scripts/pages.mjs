import HomePage from "./home/index.mjs";
import JanuaryPage from "./jan/index.mjs";
import FebruaryPage from "./feb/index.mjs";

const RendererElement = document.getElementById("content");

window.history.pushState = new Proxy(window.history.pushState, {
    apply: (target, thisArg, argArray) => {
        // trigger here what you need
        return target.apply(thisArg, argArray);
    },
});

const pages = [
    JanuaryPage,
    HomePage,
    FebruaryPage
]


const BUTTONS = document.getElementsByTagName("button");

for (const BUTTON of BUTTONS) {
    BUTTON.addEventListener("click", (ev) => {
        console.log(BUTTON.dataset["href"]);
        const data = {
            title: BUTTON.dataset["href"] ?? "/",
            url: BUTTON.dataset["href"] ?? "/"
        }

        for (const page of pages) {
            if (page.path === BUTTON.dataset["href"] ?? "/") {
                console.log("[pager] Page matches route")
                const RemainingPagerContent = document.getElementById("pager-content");
                if (RemainingPagerContent) RemainingPagerContent.remove();
                RendererElement.appendChild(page.element);
            }
        }

        window.history.pushState(data, data.title, data.url);
    })
}