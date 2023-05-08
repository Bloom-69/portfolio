import { PageBuilder } from "../pagebuilder/index.mjs";

const divContainer = document.createElement("article");

divContainer.id = "pager-content";

divContainer.innerHTML = `
    <p>
        On april I also programmed a bunch of stuff.
    </p>
    <p>
        I made a total of 4 pull requests on revoltchat/frontend, which is revolt's upcoming lightweight client made from
        scratch using a newer framework called Solid. Which I will admit, I <i>kinda</i> influenced the rewrite of the client.
    </p>
    <p>
        Let me explain.
    </p>
    <p>
        When I found out about Solid on a <a href="https://youtube.com/user/fireship">Fireship</a> video, I decided to try
        it out. And I loved it, every single bit of it made sense to me, even though it was 1, brand new, and 2, really small.
    </p>
    <p>
        And I like small, indie, promising projects because if the developers know what they are doing and they know their
        target audience, they can basically make this a really good framework. And they did.
    </p>
    <p>
        So, what does this have to do with me influencing the rewrite of a bigger project that I wasn't even part of?
    </p>
    <p>
        Well, Revolt.chat's official server has some programming channels where you can ask questions and receive answers from others,
        similar to your typical discord programming servers. And I asked for a question relating to Solid and MobX (Reactivity
        Framework), and Insert (Founder of the same platform) gave me an answer of that question, with a code snippet, of course.
    </p>
    <p>
        But he also expressed that he didn't really knew about Solid, so I gave him a link to the official page. And he seemed to like the
        framework (which I didn't expect from him).
    </p>
    <p>
        I also fixed a couple of issues on someone's website and continued a previously defunct, broken, discord bot and ported it to
        revolt, which you can invite it <a href="https://app.revolt.chat/bot/01GVXERZEVW9ADDQ0Q981KKYTA">here</a>.
    </p>
`;

const April = new PageBuilder().setName("April").setPath("/apr").setElement(divContainer).build();

export default April;