import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { UserContext } from "../App";

function LoginPage() {
  const navigate = useNavigate();

  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const [UserList, setUserList] = useState([]);
  const [UsernameInput, setUsernameInput] = useState("");
  const [LoginError, setLoginError] = useState("");

  useEffect(() => {
    api.fetchUsers().then((users) => {
      setUserList(users);
    });
  }, []);

  const handleChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const UserLogin = (e) => {
    e.preventDefault();
    if (
      UserList.some((user) => {
        if (user.username === UsernameInput) {
          setUser({
            username: user.username,
            name: user.name,
            avatar_url: user.avatar_url,
          });
          return true;
        }
        return false;
      })
    ) {
      setUsernameInput("");
      navigate("/articles/");
      setIsLoggedIn(true);
    } else {
      setLoginError("This user does not exist");
    }
  };

  return (
    <div>
      {UserList.length > 0 ? (
        <>
          <p>{LoginError}</p>
          <form onSubmit={UserLogin}>
            <label>
              Username:{" "}
              <input
                type="text"
                onChange={handleChange}
                value={UsernameInput}
              ></input>
            </label>
            <button type="submit" disabled={!UsernameInput}>
              Sign In
            </button>
          </form>
          <p>
            Valid Usernames: tickle122, grumpy19, happyamy2016, cooljmessy,
            weegembump, jessjelly
          </p>
        </>
      ) : (
        <p>The server is booting up...</p>
      )}
    </div>
  );
}

export default LoginPage;
