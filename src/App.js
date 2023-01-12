import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import LoginPage from "./Components/LoginPage";
import TopicList from "./Components/TopicList";
import SingleTopic from "./Components/SingleTopic";
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
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route index path="/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<TopicList />} />
          <Route path="/topics/:topic_slug" element={<SingleTopic />} />
          <Route path="/*" element={<p>Error Status 404 - Not Found</p>} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
