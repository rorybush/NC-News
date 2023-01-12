import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { UserContext } from "../App";

function Header() {
  const { User } = useContext(UserContext);

  return (
    <div>
      <h1>NC News</h1>
      <BrowserRouter>
        <Link to={`/`} onClick={() => this.forceUpdate}>
          <p>Home</p>
        </Link>
      </BrowserRouter>
      <p>Hello {User.name}, Welcome to NC News</p>
    </div>
  );
}

export default Header;
