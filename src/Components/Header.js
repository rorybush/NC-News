import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Header() {
  const { User } = useContext(UserContext);

  return (
    <div className="header">
      <h1>NC News</h1>
      <nav>
        <Link to="/articles">Articles</Link>
        <Link className="nav--topics" to="/topics">
          Topics
        </Link>
      </nav>

      <p>Hello {User.name}, Welcome to NC News</p>
    </div>
  );
}

export default Header;
