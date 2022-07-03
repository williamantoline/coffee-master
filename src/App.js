import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Auth type="login" />} />
            <Route path="signup" element={<Auth type="signup" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
