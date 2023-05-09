import { PageBuilder } from "../pagebuilder/index.mjs";

const divContainer = document.createElement("div");

divContainer.id = "pager-content";

divContainer.innerHTML = `
    <h2>Click a section to see it's article...</h2>
    <p>Source Code: <a href="https://github.com/stationarystation/school-journal">Github</a></p>
    <a href="https://stationarystation.vercel.app"><code>whoami</code></a>
    <p>Made with <b>pure</b> HTML, CSS and JS. And with ❤️</p>
`;

const home = new PageBuilder().setName("Home").setPath("/").setElement(divContainer).build();

export default home;