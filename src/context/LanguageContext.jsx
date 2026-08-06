import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            welcome: "Welcome to my portfolio",
            greeting: "Hi! I'm Esmeralda",
            roles: ["Software Engineer", "Backend Developer", "Distributed Systems Specialist"],
            description: "I build reliable, distributed backend systems and digital experiences. With 3+ years of production experience in JVM and .NET environments, I love solving complex challenges with clean code, robust CI/CD, and thorough documentation.",
            cta: "My Work"
        },
        about: {
            title: "About Me",
            p1: "I am a Software Engineer and systems engineering student who loves tackling challenging backend and distributed system projects head-on. My journey spans 3+ years of production experience in international Agile teams, building resilient services and APIs.",
            p2: "I truly enjoy coding! Beyond logic, I have a strong creative side — many of the illustrations and designs in my projects are my own work. I am also deeply passionate about cybersecurity, AI, and distributed systems, constantly seeking to innovate.",
            p3: "If you like my art, feel free to check out my",
            gallery: "designs gallery",
            galleryNote: "(Development in progress).",
            interestsTitle: "My Interests",
            interests: {
                cybersecurity: "Cybersecurity",
                ai: "AI & Deep Learning",
                biotech: "Biotechnology",
                backend: "Back-End Dev",
                fintech: "Fintech",
                art: "Digital Art"
            }
        },
        skills: {
            title: "Technical Knowledge",
            subtitle: "My technical expertise categorized by context and environment.",
            categories: {
                professional: "Professional Stack",
                academic: "Academic & Projects Stack",
                methodologies: "Methodologies & QA / Analysis"
            }
        },
        experience: {
            title: "Professional Experience",
            items: [
                {
                    role: "Software Engineer II",
                    company: "UKG",
                    period: "Aug 2023 – Jan 2026",
                    location: "Montevideo, Uruguay (Hybrid)",
                    tech: "Kotlin/JVM · .NET (C#) · Spring Boot · Kafka · Docker · GitHub Actions · TeamCity · Linux",
                    bullets: [
                        "Legacy system maintenance: Took full ownership of a legacy .NET service: led debugging sessions, implemented new features, and reduced technical debt.",
                        "Documentation: Produced structured, reusable technical documentation for inherited legacy systems, significantly improving team onboarding and knowledge transfer.",
                        "Requirements & API design: Gathered and translated internal requirements into versioned REST APIs consumed by multiple teams, ensuring backward-compatibility and clear API contracts.",
                        "Production backend: Maintained production microservices (Kotlin/Spring Boot) in a multi-tenant distributed environment; managed Kafka-based event-driven messaging and Docker containers.",
                        "CI/CD & collaboration: Improved CI/CD pipelines (GitHub Actions, TeamCity) and collaborated with distributed international teams in English following Agile/Scrum."
                    ]
                },
                {
                    role: "Associate Software Engineer",
                    company: "Sabre",
                    period: "Nov 2021 – Apr 2022",
                    location: "Zonamerica, Uruguay",
                    tech: "Java · Spring Boot · API Debugging",
                    bullets: [
                        "Debugged and analyzed backend applications in a large-scale enterprise environment.",
                        "Hands-on training and development using Java and Spring Boot framework."
                    ]
                },
                {
                    role: "Customer Support → Fraud Prevention Contributor",
                    company: "Mercado Libre",
                    period: "Nov 2019 – Oct 2021",
                    location: "Montevideo, Uruguay",
                    tech: "Data Analysis · SQL · Anomaly Detection",
                    bullets: [
                        "Developed strong communication skills in a high volume environment.",
                        "Collaborated with the fraud prevention team to identify fraudulent user patterns across high volumes of data.",
                        "Achieved >80% accuracy in fraud detection reports, demonstrating analytical and anomaly-detection skills."
                    ]
                }
            ]
        },
        projects: {
            title: "Featured Work",
            subtitle: "A collection of academic, personal, and open-source projects.",
            items: [
                {
                    title: "Pikers",
                    description: "Contributor to the open-source Python tool via pull requests, debugging, and code reviews."
                },
                {
                    title: "Particle Simulator",
                    description: "A Python/Pygame sand and water physics simulator. Try the interactive HTML5 canvas version below!"
                },
                {
                    title: "Lovebets",
                    description: "Marriage registration smart contracts deployed on the Telos blockchain, featuring a Vue.js/TS web UI."
                },
                {
                    title: "Webpage Design",
                    description: "Responsive landing page design and frontend build for a blockchain entrepreneurship using Angular."
                }
            ],
            links: {
                viewCode: "View Code",
                generic: "Generic contract",
                uiRepo: "UI Repo",
                playDemo: "Play Live Demo",
                closeDemo: "Close Demo"
            }
        },
        contact: {
            title: "Get In Touch",
            subtitle: "I am always open to discussing new opportunities, collaboration, or tech challenges. Send me an email directly!",
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message",
            copyEmail: "Copy Email Address",
            copied: "Copied!",
            sending: "Sending...",
            success: "Message sent! I'll get back to you soon.",
            error: "Something went wrong. Please try emailing me directly."
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
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            welcome: "Bienvenido a mi portafolio",
            greeting: "¡Hola! Soy Esmeralda",
            roles: ["Ingeniera de Software", "Desarrolladora Backend", "Especialista en Sistemas Distribuidos"],
            description: "Construyo sistemas backend distribuidos y confiables, además de experiencias digitales. Con más de 3 años de experiencia en entornos productivos JVM y .NET, me encanta resolver desafíos complejos con código limpio, CI/CD robusto y documentación detallada.",
            cta: "Mi Trabajo"
        },
        about: {
            title: "Sobre Mí",
            p1: "Soy una Ingeniera de Software y estudiante de ingeniería de sistemas a la que le apasiona asumir retos en proyectos de backend y sistemas distribuidos. Mi trayectoria cuenta con más de 3 años de experiencia en producción trabajando en equipos internacionales ágiles, construyendo servicios y APIs resilientes.",
            p2: "¡Realmente disfruto programar! Más allá de la lógica, tengo un fuerte lado creativo: muchas de las ilustraciones y diseños en mis proyectos son de mi autoría. También me apasiona profundamente la ciberseguridad, la IA y los sistemas distribuidos, buscando siempre innovar.",
            p3: "Si te gusta mi arte, siéntete libre de visitar mi",
            gallery: "galería de diseños",
            galleryNote: "(Desarrollo en progreso).",
            interestsTitle: "Mis Intereses",
            interests: {
                cybersecurity: "Ciberseguridad",
                ai: "IA y Aprendizaje Profundo",
                biotech: "Biotecnología",
                backend: "Desarrollo Back-End",
                fintech: "Fintech",
                art: "Arte Digital"
            }
        },
        skills: {
            title: "Conocimiento Técnico",
            subtitle: "Mi experiencia técnica categorizada según su contexto y entorno.",
            categories: {
                professional: "Stack de Experiencia Profesional",
                academic: "Stack Académico y de Proyectos",
                methodologies: "Metodologías y Control de Calidad / Análisis"
            }
        },
        experience: {
            title: "Experiencia Profesional",
            items: [
                {
                    role: "Software Engineer II",
                    company: "UKG",
                    period: "Ago 2023 – Ene 2026",
                    location: "Montevideo, Uruguay (Híbrido)",
                    tech: "Kotlin/JVM · .NET (C#) · Spring Boot · Kafka · Docker · GitHub Actions · TeamCity · Linux",
                    bullets: [
                        "Mantenimiento de sistemas heredados: Asumí la responsabilidad total de un servicio heredado en .NET: lideré sesiones de depuración, implementé nuevas funciones y reduje la deuda técnica.",
                        "Documentación: Produje documentación técnica estructurada y reutilizable para sistemas heredados, mejorando significativamente la incorporación del equipo y la transferencia de conocimientos.",
                        "Diseño de APIs y requerimientos: Recopilé y traduje requerimientos internos en APIs REST con control de versiones consumidas por múltiples equipos, garantizando la compatibilidad hacia atrás y contratos de API claros.",
                        "Backend de producción: Mantuve microservicios en producción (Kotlin/Spring Boot) en un entorno distribuido multi-inquilino; administré mensería basada en eventos con Kafka y contenedores Docker.",
                        "CI/CD y colaboración: Mejoré los pipelines de CI/CD (GitHub Actions, TeamCity) y colaboré con equipos internacionales distribuidos en inglés siguiendo la metodología Agile/Scrum."
                    ]
                },
                {
                    role: "Associate Software Engineer",
                    company: "Sabre",
                    period: "Nov 2021 – Abr 2022",
                    location: "Zonamerica, Uruguay",
                    tech: "Java · Spring Boot · Depuración de APIs",
                    bullets: [
                        "Depuración y análisis de aplicaciones backend en un entorno empresarial a gran escala.",
                        "Capacitación práctica y desarrollo utilizando Java y el framework Spring Boot."
                    ]
                },
                {
                    role: "Customer Support → Colaboradora de Prevención de Fraude",
                    company: "Mercado Libre",
                    period: "Nov 2019 – Oct 2021",
                    location: "Montevideo, Uruguay",
                    tech: "Análisis de Datos · SQL · Detección de Anomalías",
                    bullets: [
                        "Desarrollé sólidas habilidades de comunicación en un entorno de alto volumen.",
                        "Colaboré con el equipo de prevención de fraude para identificar patrones de usuarios fraudulentos en grandes volúmenes de datos.",
                        "Logré una precisión superior al 80% en los informes de detección de fraude, demostrando habilidades analíticas y de detección de anomalías."
                    ]
                }
            ]
        },
        projects: {
            title: "Proyectos Destacados",
            subtitle: "Una colección de proyectos académicos, personales y de código abierto.",
            items: [
                {
                    title: "Pikers",
                    description: "Colaboradora del proyecto de código abierto en Python mediante pull requests, depuración y revisiones de código."
                },
                {
                    title: "Simulador de Partículas",
                    description: "Un simulador físico de arena y agua en Python/Pygame. ¡Prueba la versión interactiva en lienzo HTML5 abajo!"
                },
                {
                    title: "Lovebets",
                    description: "Contratos inteligentes de registro de matrimonios desplegados en la blockchain Telos, con una interfaz web en Vue.js/TS."
                },
                {
                    title: "Diseño de Página Web",
                    description: "Diseño de página de aterrizaje adaptativa y desarrollo frontend para un emprendimiento de blockchain utilizando Angular."
                }
            ],
            links: {
                viewCode: "Ver Código",
                generic: "Contrato genérico",
                uiRepo: "Repo UI",
                playDemo: "Probar Demo",
                closeDemo: "Cerrar Demo"
            }
        },
        contact: {
            title: "Ponte en Contacto",
            subtitle: "Siempre estoy abierta a discutir nuevas oportunidades, colaboraciones o retos tecnológicos. ¡Envíame un correo electrónico directamente!",
            name: "Tu Nombre",
            email: "Tu Correo",
            message: "Tu Mensaje",
            send: "Enviar Mensaje",
            copyEmail: "Copiar Correo",
            copied: "¡Copiado!",
            sending: "Enviando...",
            success: "¡Mensaje enviado! Me pondré en contacto pronto.",
            error: "Algo salió mal. Por favor, envíame un correo directo."
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
