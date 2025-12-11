import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects"
        },
        hero: {
            welcome: "Welcome to my portfolio",
            greeting: "Hi! I'm Esmeralda",
            roles: ["Software Developer", "Problem Solver", "Technology Enthusiast"],
            description: "I build digital experiences with modern technologies. Driven by a passion for science and innovation, I like to be challenged and solve problems, bringing new ideas to life through clean code and user-centric design.",
            cta: "My Work"
        },
        about: {
            title: "About Me",
            p1: "I am a highly motivated systems engineering student who discovered a passion for software development through self-directed learning. The journey wasn't always easy, but it fostered a strong sense of autonomy and the ability to tackle challenging projects head-on.",
            p2: "I truly enjoy coding! Beyond logic, I have a creative side — many of the illustrations and designs in my projects are my own work. I am also deeply passionate about science and challenges, constantly seeking to innovate and bring new ideas to the table.",
            p3: "If you like my art, feel free to check out my",
            gallery: "designs gallery",
            galleryNote: "(Didn't start development yet).",
            interestsTitle: "My Interests",
            interests: {
                cybersecurity: "Cybersecurity",
                ai: "AI & Deep Learning",
                gamedev: "Game Dev",
                backend: "Back-End Dev",
                devops: "DevOps",
                art: "Digital Art"
            }
        },
        skills: {
            title: "Technical Knowledge",
            subtitle: "A breakdown of my technical expertise across different domains.",
            categories: {
                languages: "Languages",
                frameworks: "Frameworks & Libraries",
                tools: "Tools & Platforms"
            }
        },
        projects: {
            title: "My Projects",
            subtitle: "Some of the initial work I've done.",
            items: [
                {
                    title: "Webpage Design",
                    description: "Landing page for a blockchain entrepreneurship. Built with Angular."
                },
                {
                    title: "Particle Simulator",
                    description: "Python program utilizing pygame to simulate particle behaviors like sand and water."
                },
                {
                    title: "Lovebets",
                    description: "Smart contract for marriage registration on the blockchain with a React UI."
                }
            ],
            links: {
                viewCode: "View Code",
                generic: "Generic contract",
                uiRepo: "UI Repo"
            }
        },
        footer: {
            madeWith: "Made with"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            skills: "Habilidades",
            projects: "Proyectos"
        },
        hero: {
            welcome: "Bienvenido a mi portafolio",
            greeting: "¡Hola! Soy Esmeralda",
            roles: ["Desarrolladora de Software", "Solucionadora de Problemas", "Entusiasta de la Tecnología"],
            description: "Construyo experiencias digitales con tecnologías modernas. Impulsada por la pasión por la ciencia y la innovación, me gustan los retos y resolver problemas, dando vida a nuevas ideas a través de código limpio y diseño centrado en el usuario.",
            cta: "Mi Trabajo"
        },
        about: {
            title: "Sobre Mí",
            p1: "Soy una estudiante de ingeniería de sistemas altamente motivada que descubrió su pasión por el desarrollo de software a través del autoaprendizaje. El camino no siempre fue fácil, pero fomentó un fuerte sentido de autonomía y la capacidad de afrontar proyectos desafiantes.",
            p2: "¡Realmente disfruto programar! Más allá de la lógica, tengo un lado creativo: muchas de las ilustraciones y diseños en mis proyectos son obra mía. También me apasiona profundamente la ciencia y los desafíos, buscando constantemente innovar y aportar nuevas ideas.",
            p3: "Si te gusta mi arte, siéntete libre de visitar mi",
            gallery: "galería de diseños",
            galleryNote: "(Aún no he comenzado el desarrollo).",
            interestsTitle: "Mis Intereses",
            interests: {
                cybersecurity: "Ciberseguridad",
                ai: "IA y Aprendizaje Profundo",
                gamedev: "Desarrollo de Videojuegos",
                backend: "Desarrollo Back-End",
                devops: "DevOps",
                art: "Arte Digital"
            }
        },
        skills: {
            title: "Conocimiento Técnico",
            subtitle: "Un desglose de mi experiencia técnica en diferentes dominios.",
            categories: {
                languages: "Lenguajes",
                frameworks: "Frameworks y Bibliotecas",
                tools: "Herramientas y Plataformas"
            }
        },
        projects: {
            title: "Mis Proyectos",
            subtitle: "Algunos de los trabajos iniciales que he realizado.",
            items: [
                {
                    title: "Diseño de Página Web",
                    description: "Página de aterrizaje para un emprendimiento de blockchain. Construida con Angular."
                },
                {
                    title: "Simulador de Partículas",
                    description: "Programa en Python utilizando pygame para simular comportamientos de partículas como arena y agua."
                },
                {
                    title: "Lovebets",
                    description: "Contrato inteligente para registro de matrimonios en blockchain con una interfaz React."
                }
            ],
            links: {
                viewCode: "Ver Código",
                generic: "Contrato genérico",
                uiRepo: "Repo UI"
            }
        },
        footer: {
            madeWith: "Hecho con"
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
