import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { WelcomePage } from "../features/WelcomePage/welcomePage";
import { LogIn } from "../features/LogIn/logIn";
import { MyCarrer } from "../features/MyCarrer/myCarrer";
import { Calculator } from "../features/Calculator/calculator";
import JobOffers from "../features/JobOffers/jobOffers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeScreen" element={<WelcomePage />} />
        <Route path={"*"} element={<Navigate replace to="/HomeScreen" />}></Route>
        <Route path="/Home" element={<><Navigation /><Home /></>} />
        <Route path="/Log-In" element={<><Navigation /><LogIn /></>} />
        <Route path="/Carrer" element={<><Navigation /><MyCarrer /></>} />
        <Route path="/Calculator" element={<><Navigation /><Calculator /></>} />
        <Route path="/Offers" element={<><Navigation /><JobOffers /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
