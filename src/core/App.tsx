import { HomePage } from "../features/HomePage/homePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path={"*"} element={<Navigate replace to="/Home" />}> </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
