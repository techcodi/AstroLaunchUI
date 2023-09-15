import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import Allwork from "./components/Allwork";
import Companies from "./components/Companies";
import Project from "./components/Project";
import Summary from "./components/Summary";
import DesignCoode from "./components/DesignCoode";
import Astro from "./components/Astro";
import Example from "./components/Example";
import Plans from "./components/Plans";
import Web from "./components/Web";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Allwork />
      <Companies />
      <Project />
      <Summary />
      <DesignCoode />
      <Astro />
      <Example />
      <Plans />
      <Web />
      <Footer />
    </div>
  );
}

export default App;
