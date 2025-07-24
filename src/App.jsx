import AboutMe from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Portfolio from "./component/project";
import Services from "./component/service";

import Skills from "./component/skills";

function App() {
 return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Services/>
      <Skills/>
    <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
