import NetworkCanvas from './components/NetworkCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Events from './components/Events';
import Offerings from './components/Offerings';
import Team from './components/Team';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <NetworkCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Events />
        <Offerings />
        <Team />
        <Community />
        <Footer />
      </main>
    </>
  );
}
