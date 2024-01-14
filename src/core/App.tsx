import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LogIn } from "../features/LogIn/logIn";
import { Calculator } from "../features/Calculator/calculator";
import { JobOffers } from "../features/JobOffers/jobOffers";
import { Carrer } from "../features/Carrer/carrer";
import { Creator } from "../features/Creator/creator";
import { Footer } from "../common/Footer/footer";
import { Register } from "../features/Register/register";
import { ResetPassword } from "../features/LogIn/ResetPassword/resetPassword";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={"*"} element={<Navigate replace to="/Home" />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Log-In" element={<LogIn />} />
        <Route path="/Carrer" element={<Carrer />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Offers" element={<JobOffers />} />
        <Route path="/CV-Creator" element={<Creator />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/password-reset" element={<ResetPassword />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
