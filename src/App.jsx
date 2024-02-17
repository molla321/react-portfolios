import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from './components/Loader';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{
      setLoader(false)
    },5000)
  },[])
  return (
    
     <div className="bg-slate-900">
      {
         loader ? 
         <Loader />
         : 
         <div className="bg-slate-900">
             <Nav />
             <Banner />
             <About />
             <Services />
             <Projects />
             <Contact />
             <Footer />
         
       </div>
       
      }
     </div>
  );
}

export default App;
