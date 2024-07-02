import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <div className="d-flex flex-grow-1">
          <Routes>
            <Route path="/" exact element={<MainPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
