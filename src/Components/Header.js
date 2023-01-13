import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Header() {
  const { User, IsLoggedIn } = useContext(UserContext);

  return (
    <div className="header">
      <Link to="/articles" style={{ color: "#994636" }}>
        <h1>NC News</h1>
      </Link>
      <nav>
        <Link to="/articles" style={{ color: "#994636" }}>
          Articles
        </Link>
        <Link className="nav--topics" to="/topics" style={{ color: "#994636" }}>
          Topics
        </Link>
      </nav>

      {IsLoggedIn ? (
        <div>
          <p>Hello {User.name}, Welcome to NC News</p>
          <img src={User.avatar_url} alt={`${User.name} Profile Avatar`} />
        </div>
      ) : (
        <Link to="/" style={{ color: "#994636" }}>
          <p>Login</p>
        </Link>
      )}
    </div>
  );
}

export default Header;
