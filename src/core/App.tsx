import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { WelcomePage } from "../features/WelcomePage/welcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/HomeScreen" element={<WelcomePage />} />
        <Route path={"*"} element={<Navigate replace to="/HomeScreen" />}></Route>
        <Route path="/Home" element={<><Navigation /><Home /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
