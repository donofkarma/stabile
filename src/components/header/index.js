import React from "react";
import Link from "gatsby-link";

const Header = () => (
    <header className="container-fluid header">
        <h1 style={{ margin: 0 }}>
            <Link to="/">Stabile</Link>
        </h1>
    </header>
);

export default Header;
