import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterConfig from "./Components/Router";
import userContext from "./Components/ContextText";
import { HashRouter } from "react-router-dom";
import "./App.css";
import "./login.css";
import "./CreateAccount.css";
import "./empty.css";
import "./profile.css";
import "./preview.css";

function App() {
  const [links, setLinks] = useState([]);
  const [profile, setprofile] = useState({
    details: {
      Firstname: "",
      lastname: "",
      email: "",
    },

    url: "",
  });
  return (
    <userContext.Provider value={{ links, setLinks, profile, setprofile }}>
      <HashRouter>
        <Routes>
          {RouterConfig.main.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
    </userContext.Provider>
  );
}

export default App;
