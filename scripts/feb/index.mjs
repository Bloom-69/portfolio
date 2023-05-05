import { PageBuilder } from "../pagebuilder/index.mjs";

const articleContainer = document.createElement(`article`);

articleContainer.id = "pager-content";

articleContainer.innerHTML = ``;

const Feb = new PageBuilder().setName("February").setPath("/feb").setElement(articleContainer).build();

export default Feb;