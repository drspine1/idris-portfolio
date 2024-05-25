import AboutMe from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
import Portfolio from "./component/portfolio";
import Skills from "./component/skills";

const Home = () => {
  return (
    <>
    <div className="home-page">
   <Navbar/>
   <Hero/>
   <AboutMe/>
     <Skills/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
    </>
    );
}
 
export default Home;