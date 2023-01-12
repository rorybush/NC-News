import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import LoginPage from "./Components/LoginPage";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [User, setUser] = useState({
    username: "",
    name: "",
    avatar_url: "",
  });
  return (
    <div className="App">
      <UserContext.Provider value={{ User, setUser }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/*" element={<p>Error Status 404 - Not Found</p>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
