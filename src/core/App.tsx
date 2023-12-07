import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { WelcomePage } from "../features/WelcomePage/welcomePage";
import { LogIn } from "../features/LogIn/logIn";
import { Calculator } from "../features/Calculator/calculator";
import JobOffers from "../features/JobOffers/jobOffers";
import { Carrer } from "../features/Carrer/carrer";
import { Creator } from "../features/Creator/creator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeScreen" element={<WelcomePage />} />
        <Route path={"*"} element={<Navigate replace to="/HomeScreen" />}></Route>
        <Route path="/Home" element={<><Navigation /><Home /></>} />
        <Route path="/Log-In" element={<><Navigation /><LogIn /></>} />
        <Route path="/Carrer" element={<><Navigation /><Carrer /></>} />
        <Route path="/Calculator" element={<><Navigation /><Calculator /></>} />
        <Route path="/Offers" element={<><Navigation /><JobOffers /></>} />
        <Route path="/CV-Creator" element={<><Navigation /><Creator /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
