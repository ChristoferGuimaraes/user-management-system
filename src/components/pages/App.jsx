import { Header } from "../Header";
import '../../assets/css/styles.css';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
