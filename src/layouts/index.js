import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import "./index.scss";

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Stabile"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
            ]}
        />

        <Header />

        <main>
            <section className="container-fluid">{children()}</section>
        </main>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
