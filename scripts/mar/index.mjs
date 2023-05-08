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
        that I was missing codecs on my machine (wow).
    </p>
    <p>
        I also opened a pull request (basically merging code from a repo/branch
        to another repo/branch) on revkit, a library made for Revolt.Chat clients,
        in which I made the project make a switch from GitBook to TypeDoc.
    </p>
    <p>
        Finally, I also made another pull request to add a theme to revolt made
        by another user, who didn't know how to add it for discovery.
    </p>
    <p>
        Overall, it was a pretty productive month for me.
    </p>
`;
    
const Mar = new PageBuilder().setName("March").setPath("/mar").setElement(articleContainer).build();

export default Mar;