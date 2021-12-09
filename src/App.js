import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import MainNavigation from "./components/Mainnavigation";
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation/>
          <Routes>
             <Route path="/" element={<Landingpage />} />
             <Route path="Loginpage" element={<Loginpage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

