import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Clients from "./Component/Clinets/Clients";
import Features from "./Component/Features/Features";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import CTA from "./Component/CTA/CTA";
import StatsSection from "./Component/StatsSection/StatsSection";





function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Clients/>
     <Features/>
     <About/>
     <StatsSection/>
     <Blog/>
     <CTA/>
     <Footer/>
      </>
  );
}

export default App;
