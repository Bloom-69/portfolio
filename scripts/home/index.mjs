import { PageBuilder } from "../pagebuilder/index.mjs";

const divContainer = document.createElement("div");

divContainer.id = "pager-content";

divContainer.innerHTML = `
    <h2>Click a section to see it's article...</h2>
    <p>This page's source: <a href="https://github.com/stationarystation/school-journal">Github</a></p>
    <p>
        Social Media Links:
        <a href="https://stationarystation.vercel.app">Landing Page</a>
        ,
        <a href="https://github.com/stationarystation">Github Profile</a>
        ,
        <a href="https://github.com/stationaryStation?tab=repositories">More Projects</a>
        and
        <a href="https://lea.pet/@station" rel="me">"My Mastodon"</a>
    </p>
    <p>Made with <b>pure</b> HTML, CSS, JS and ❤️</p>
`;

const home = new PageBuilder().setName("Home").setPath("/").setElement(divContainer).build();

export default home;