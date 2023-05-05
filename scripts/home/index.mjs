import { PageBuilder } from "../pagebuilder/index.mjs";

const divContainer = document.createElement("div");

divContainer.id = "pager-content";

divContainer.innerHTML = "<h1>Click a section to see it's article...</h1>";

const home = new PageBuilder().setName("Home").setPath("/").setElement(divContainer).build();

export default home;