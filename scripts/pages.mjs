import HomePage from "./home/index.mjs";
import JanuaryPage from "./jan/index.mjs";
import FebruaryPage from "./feb/index.mjs";
import MarchPage from "./mar/index.mjs";
import AprilPage from "./apr/index.mjs";
import MayPage from "./may/index.mjs";

const RendererElement = document.getElementById("content");

const NotFoundPage = document.createElement("div")
NotFoundPage.id = "pager-content";
NotFoundPage.className = "notfound";
NotFoundPage.innerHTML = `<h1>404</h1><p>Not found :(</p>`;

const pages = {
    "/": HomePage.element,
    "/jan": JanuaryPage.element,
    "/feb": FebruaryPage.element,
    "/mar": MarchPage.element,
    "/apr": AprilPage.element,
    "/may": MayPage.element
}

/**
 * Render a page
 * @param {string} url 
 * @returns {void}
 */
function navigate(url) {
    const RemainingPagerContent = document.getElementById("pager-content");
    if (RemainingPagerContent) RemainingPagerContent.remove();
    RendererElement.appendChild(pages[url] || NotFoundPage);
}

document.querySelectorAll(`a[href^="/"]`).forEach((el, index) => {
    console.log("[debug] Registering event listener on", el.tagName, index);
    el.addEventListener("click", e => {
        e.preventDefault();
        const { pathname: path } = new URL(e.target.href);
        window.history.pushState({ path }, path, path);
        navigate(path);
    })
})

window.addEventListener("popstate", e => {
    navigate(new URL(window.location.href).pathname);
})

navigate("/");