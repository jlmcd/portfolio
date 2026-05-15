import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-gray-100 font-sans selection:bg-accent selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
