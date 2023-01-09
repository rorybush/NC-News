import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./Components/ArticleList";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArticleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
