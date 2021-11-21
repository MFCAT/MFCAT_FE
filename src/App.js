import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/Topbar";
import MarketPlace from "./components/MarketPlace";
import Account from "./components/Account";
import Create from "./components/Create";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bgimage">
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<MarketPlace />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
