import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Navbar/Intro/Intro";
import Services from "./Component/Navbar/Services/Services";
import Experience from "./Component/Navbar/Experience/Experience";
import Works from "./Component/Navbar/Works/Works";
import Portfolio from "./Component/Navbar/Portfolio/Portfolio";
import Testimonial from "./Component/Navbar/Testimonial/Testimonial";
import Contact from "./Component/Navbar/Contact/Contact";
import Footer from "./Component/Navbar/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color : darkMode? 'white': ''
    }}
    
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
