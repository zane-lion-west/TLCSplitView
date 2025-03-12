import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.jsx";

const App = () => {

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
