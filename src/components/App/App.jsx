import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Includes from "../Includes/Includes";
import About from "../About/About";
import Stages from "../Stages/Stages";
import Benefits from "../Benefits/Benefits";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Services />
      <Includes />
      <About />
      <Stages />
      <Benefits />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
