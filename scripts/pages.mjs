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
    document.querySelectorAll(`a[href^="/"]`).forEach((el, index) => {
        console.log(
            "[debug] Checking if href matches url\nhref:",
            el.href,
            "\nurl:",
            url
        );
        if (new URL(el.href).pathname === url) {
            console.log(
                "[debug] Add 'active' to classList of link",
                index,
                "\nMatching",
                url
            );
            el.classList.add("active");
        } else {
            console.log(
                "[debug] Remove 'active' from classList of link",
                index,
                "\nNot matching",
                url
            );
            el.classList.remove("active");
        }
    });
    console.log("[debug] Adding header", titles[url]);
    const Header = document.createElement("h1");
    Header.innerText = titles[url];
    Header.id = "pager-header";
    RendererElement.append(Header);

    RendererElement.append(pages[url] || NotFoundPage);
}

document.querySelectorAll(`a[href^="/"]`).forEach((el, index) => {
    console.log("[debug] Registering event listener on", el.tagName, index);
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const { pathname: path } = new URL(e.target.href);
        window.history.pushState({ path }, path, path);
        navigate(path);
    });
});

window.addEventListener("popstate", (e) => {
    navigate(new URL(window.location.href).pathname);
});

navigate("/");
