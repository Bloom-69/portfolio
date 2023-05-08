import { PageBuilder } from "../pagebuilder/index.mjs";
const articleContainer = document.createElement(`article`);

articleContainer.id = "pager-content";

articleContainer.innerHTML = `
        <br />
        <p>
            I don't know how to start this "Journal" thing that we are making
            for english class. But yet here we are nonetheless.
        </p>
        <p>
            January was rough, I was really, really distracted with my personal
            projects I usually have hosted on my github account. For example,
            I was finishing up our FRC robot's code, because the competition
            was starting in a few months. So I had to get going and start learning
            some programming paradigms that Java uses, for instance,
            classes, inheritance, abstraction, etc... And learning all of that
            in a very short amount of time is a daunting task to say the least.
        </p>
        <p>
            Nevertheless, we managed to get the robot's basic parts to
            function properly.
        </p>
        <p>
            <i>Although</i>, at the same time, I was thinking about being trans.
        </p>
        <p>
            I don't know how to explain it, really. Just thinking about it just gives
            me dysphoria, it's pretty weird.
        </p>
        <p>
            I always thought it was just a "phase" and that "everything would be alright".
            Oh, I was wrong. <i>So fucking wrong</i>.
        </p>
        <p>
            There will be more about this on the next section. I think?
        </p>
    `

const Jan = new PageBuilder().setName("January").setPath("/jan").setElement(articleContainer).build();

export default Jan;