import { PageBuilder } from "../pagebuilder/index.mjs";

const divContainer = document.createElement("article");

divContainer.id = "pager-content";

divContainer.innerHTML = `
    <p>
        Not a lot of stuff has happened on may to be honest. So I don't think I should be adding it here.
        But eh, I guess I can explain why I didn't use a proper website framework or a design application.
    </p>
    <p>
        This page uses <code>HTMLPager</code>, a custom HTML SPA framework I made for the sole purpose
        of making this site (Insane, I know).
    </p>
    <p>
        It uses a combination of modern HTML APIs and ES6 (EcmaScript 6) to route through the pages
        (almost) seamlessly, without having too much memory overhead.
    </p>
    <p>
        I didn't use a framework, or a package because I like to give myself challenges from time to time.
        I don't like doing the same things over, and over again, it gets boring after 2 or 3 repetitions.
    </p>
    <p>
        Plus, It makes me think out of the box and learn new (and probably faster) ways to do the things
        I am used to do on modern JavaScript frameworks with certain limitations that I've imposed to myself.
    </p>
    <p>
        I really like how this website turned out, and I will like to credit
        <a href="https://stackoverflow.com/users/6243352">"ggorlen"</a> on StackOverflow for providing
        a basic implementation of a SPA router (SPA stands for <b>S</b>ingle <b>P</b>age <b>A</b>pplication)
    </p>
`;

const May = new PageBuilder().setName("May").setPath("/may").setElement(divContainer).build();

export default May;