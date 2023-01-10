import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ArticleList from "../Components/ArticleList";

function Header() {
  return (
    <div>
      <h1>NC News</h1>
      <BrowserRouter>
        <Link to={`/`} onClick={() => this.forceUpdate}>
          <p>Home</p>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default Header;
