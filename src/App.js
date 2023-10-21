import Mainn from "./Components/Mainn/Mainn";
import Navbar from "./Components/Navbar/Navbar";
import Infos from "./Components/Infos/Infos";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
   <Navbar />
   <Mainn />
   <Infos />
   <Portfolio/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
