import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navBar";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";

const Home = () => {
  return ( 
    <>
    <div className="home-page">
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
    </>
   );
}
 
export default Home;