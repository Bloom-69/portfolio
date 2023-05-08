import { PageBuilder } from "../pagebuilder/index.mjs";

const articleContainer = document.createElement(`article`);

articleContainer.id = "pager-content";

articleContainer.innerHTML = `
  <p>
    If I remember correctly, I was still, working on my revolt.chat client.
    I am not sure what I added that month, but I started work on a more modular
    settings panel, so that I can add features with ease. Except that I lost all
    motivation from working on it because the codebase became too complex, too quickly.
  </p>
  <p>
    Maintaining code organized can help with understanding how things are done without
    having extensive knowledge of how the programming language works. But because
    I didn't organize my work, it eventually became what we (developers) like to call
    "spaghetti code", which is code that seems stuffed together in such a way that,
    if you remove something from that jumbled mess, the whole repo collapses onto itself.
  </p>
  <p>
    It has happened to me many times before and will happen even more times if I <b>don't</b>
    maintain my code clean.
  </p>
    `;
    
const Feb = new PageBuilder().setName("February").setPath("/feb").setElement(articleContainer).build();

export default Feb;