import "./App.css";
import Footer from "./layers/Footer";
import Header from "./layers/Header";
import Main from "./layers/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
