import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Inicio } from "./pages/Inicio";
import { Sobre } from "./pages/Sobre";
import { Portfolio } from "./pages/Portfolio";
import { Contato } from "./pages/Contato";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contato" element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
