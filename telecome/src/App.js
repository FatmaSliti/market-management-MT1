import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from './components/Header.js';
import Articles from "./components/Articles.js";
import NouveauMarché from "./components/NouveauMarché.js";
// import SignUp from "./components/SignUp.js";
// import SignIn from "./components/SignIn.js";
// import Component from './components/myComponent.js'
import Attachement from "./components/Attachement.js";
import OrdreService from "./components/OrdreDeService.js";
import ChoosePage from "./components/ChoosePage.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
import PvReceptionProvisoire from "./components/PVReception.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChoosePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/NouveauMarché" element={<NouveauMarché />} />
        <Route path="/Attachement" element={<Attachement />} />
        <Route path="/OrdreService" element={<OrdreService />} />
        <Route path="/PVReception" element={<PvReceptionProvisoire />} />
        <Route path="/Articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
