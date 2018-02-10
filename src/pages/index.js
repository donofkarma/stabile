import React from "react";

const IndexPage = () => (
    <article>
        <p>A static site site generator powered by GatsbyJS.</p>

        <h2>Getting started</h2>
        <p>
            To use this generator you will need{" "}
            <a
                href="http://nodejs.org/"
                target="_blank"
                rel="noreferrer noopener"
            >
                NodeJS
            </a>{" "}
            (min v8.9.4).
        </p>

        <h2>Writing code</h2>

        <code>
            <pre>npm run start</pre>
        </code>

        <h2>Bundling for deployment</h2>

        <code>
            <pre>npm run build</pre>
        </code>

        <p>
            You'll find a deployable bundle in the <code>public</code>{" "}
            directory.
        </p>

        <h2>To-do</h2>
        <ul>
            <li>Some better docs</li>
        </ul>

        <h2>Release History</h2>
        <p>
            For a full release history, see the{" "}
            <a href="https://github.com/donofkarma/stabile/blob/master/CHANGELOG.md">
                Changelog
            </a>.
        </p>

        <h2>License</h2>
        <p>
            MIT:{" "}
            <a href="https://github.com/donofkarma/stabile/blob/master/LICENSE">
                https://github.com/donofkarma/stabile/blob/master/LICENSE
            </a>.
        </p>
    </article>
);

export default IndexPage;
