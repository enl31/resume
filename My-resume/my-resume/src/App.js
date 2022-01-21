import "./App.css";
import About from "./component/about/About";
import Intro from "./component/intro/Intro";
import ProductList from "./component/productList/ProductList";
import Contact from "./component/contact/Contact";
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Toggle from "./component/toggle/Toggle";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./navbar/Navbar";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbarr />
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
