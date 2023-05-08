import { PageBuilder } from "../pagebuilder/index.mjs";

const articleContainer = document.createElement(`article`);

articleContainer.id = "pager-content";

articleContainer.innerHTML = `
    <p>
        March was where I began to go full swing with github and coding.
    </p>
    <p>
        I started by opening a issue on a free and open source youtube
        frontend called "poketube" (despite the name starting with the
        prefix "poke" it has nothing to do with pokemon). The issue was
        that the video element wasn't playing any kind of videos. It took
        me approximately 3 days to find the root cause of the issue, which was
        missing codecs on my machine (wow).
    </p>
`;
    
const Mar = new PageBuilder().setName("March").setPath("/mar").setElement(articleContainer).build();

export default Mar;