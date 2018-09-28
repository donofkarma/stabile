import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../header";

import "./style.scss";

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Helmet
      title="Stabile"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />

    <Header />

    <main>
      <section className="container-fluid">{children}</section>
    </main>
  </Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.node
};

export default TemplateWrapper;
