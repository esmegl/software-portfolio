import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const Hero = () => {
    const { t } = useLanguage();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = t.hero.roles;
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, t.hero.roles]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="home">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-dark overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-2 px-4 border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-full text-secondary font-medium tracking-wide mb-6">
                        {t.hero.welcome}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        {t.hero.greeting}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary h-[1.2em] inline-block">
                            {text}
                        </span>
                        <span className="animate-pulse text-white">|</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                        {t.hero.description}
                    </p>
                    <button
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative cursor-pointer inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-primary to-secondary px-8 font-medium text-white transition-all duration-300 hover:w-40 hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <span className="mr-2">{t.hero.cta}</span>
                        <svg className="h-5 w-5 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
