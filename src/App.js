import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skils from "./components/Skils";
import SocialLinkes from "./components/SocialLinkes";
import Work from "./components/Work";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialLinkes />
      <Skils />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
