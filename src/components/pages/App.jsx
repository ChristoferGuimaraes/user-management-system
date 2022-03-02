import React, { useState } from "react";
import { Header } from "../Header";
import "../../assets/css/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { AllUsersContext } from "../../contexts/AllUsersContext";
import { Footer } from "../Footer";
import Routes from "../../services/routes/routes";

function App() {
  const [userObj, setUserObj] = useState({});
  const [users, setUsers] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <AllUsersContext.Provider value={{ users, setUsers }}>
          <UserContext.Provider value={{ userObj, setUserObj }}>
            <Routes />
          </UserContext.Provider>
        </AllUsersContext.Provider>
      </Router>
      <Footer />

    </>
  );
}

export default App;
