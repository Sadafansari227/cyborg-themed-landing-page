import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberneticCore from './components/CyberneticCore';
import HumanMachine from './components/HumanMachine';
import SystemModules from './components/SystemModules';
import CyberScanner from './components/CyberScanner';
import EvolutionProtocol from './components/EvolutionProtocol';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <CyberneticCore />
      <HumanMachine />
      <SystemModules />
      <CyberScanner />
      <EvolutionProtocol />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
