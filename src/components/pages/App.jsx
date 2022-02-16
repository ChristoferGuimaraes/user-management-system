import React, { useState } from "react";
import { Header } from "../Header";
import "../../assets/css/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

import Routes from "../../services/routes/routes";

function App() {
  const [userObj, setUserObj] = useState({});
  return (
    <>
      <Header />
      <Router>
        <UserContext.Provider value={{ userObj, setUserObj }}>
          <Routes />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
