import HomePage from "./home/index.mjs";
import JanuaryPage from "./jan/index.mjs";
import FebruaryPage from "./feb/index.mjs";
import MarchPage from "./mar/index.mjs";
import AprilPage from "./apr/index.mjs";
import MayPage from "./may/index.mjs";

const RendererElement = document.getElementById("content");

const NotFoundPage = document.createElement("div");
NotFoundPage.id = "pager-content";
NotFoundPage.className = "notfound";
NotFoundPage.innerHTML = `<h1>404</h1><p>Not found :(</p>`;

const pages = {
    "/": HomePage.element,
    "/jan": JanuaryPage.element,
    "/feb": FebruaryPage.element,
    "/mar": MarchPage.element,
    "/apr": AprilPage.element,
    "/may": MayPage.element,
};
const titles = {
    "/": HomePage.name,
    "/jan": JanuaryPage.name,
    "/feb": FebruaryPage.name,
    "/mar": MarchPage.name,
    "/apr": AprilPage.name,
    "/may": MayPage.name,
};

/**
 * Render a page
 * @param {string} url
 * @param {string} title
 * @returns {void}
 */
function navigate(url) {
    const RemainingPagerContent = document.getElementById("pager-content");
    const RemainingHeader = document.getElementById("pager-header");
    
    if (RemainingPagerContent) RemainingPagerContent.remove();
    if (RemainingHeader) RemainingHeader.remove();
    
    // Check if page is active
    document.querySelectorAll(`a[href^="/"]`).forEach(el => {
        if (new URL(el.href).pathname === url) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
    
    const Header = document.createElement("h1");
    
    Header.innerText = titles[url];
    Header.id = "pager-header";
    
    RendererElement.append(Header, pages[url] || NotFoundPage);
}

document.querySelectorAll(`a[href^="/"]`).forEach(el => {
    el.addEventListener("click", e => {
        // Remove default event handler
        e.preventDefault();
        const { pathname: path } = new URL(e.target.href);
        window.history.pushState({ path }, path, path);
        navigate(path);
    });
});

window.addEventListener("popstate", () => navigate(new URL(window.location.href).pathname));

navigate("/");
