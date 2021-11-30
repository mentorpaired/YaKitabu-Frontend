import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import MainNavigation from "./components/Mainnavigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainNavigation/>
      <Routes>
         <Route path="/" element={<Landingpage />} />
         <Route path="Loginpage" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;

