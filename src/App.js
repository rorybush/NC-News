import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:article_id" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
