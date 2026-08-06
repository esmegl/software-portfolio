import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <div className="bg-dark text-white min-h-screen selection:bg-primary selection:text-white">
                <NavBar />
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
