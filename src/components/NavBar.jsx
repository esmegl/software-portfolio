import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinLogo, GithubLogo, Code, Terminal, List, X, Globe } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

export const NavBar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Esmeralda<span className="text-white">.dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex space-x-4 border-l border-gray-700 pl-6 items-center">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors mr-2"
                        >

                            <span className="uppercase text-sm font-medium">
                                {language === 'en' ? 'ES 🇪🇸' : 'EN 🇺🇸'}
                            </span>
                        </button>
                        <SocialLink href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/" icon={<LinkedinLogo size={20} />} />
                        <SocialLink href="https://github.com/esmegl" icon={<GithubLogo size={20} />} />
                        <SocialLink href="https://leetcode.com/emerald_21/" icon={<Code size={20} />} />
                        <SocialLink href="https://www.hackerrank.com/gallardo_esmera1?hr_r=1" icon={<Terminal size={20} />} />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-gray-800"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white block py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setMobileMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 text-gray-300 hover:text-white py-2"
                            >

                                <span className="uppercase font-medium">
                                    {language === 'en' ? 'Cambiar a Español 🇪🇸' : 'Switch to English 🇺🇸'}
                                </span>
                            </button>
                            <div className="flex space-x-6 pt-4 border-t border-gray-800 justify-center">
                                <SocialLink href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/" icon={<LinkedinLogo size={24} />} />
                                <SocialLink href="https://github.com/esmegl" icon={<GithubLogo size={24} />} />
                                <SocialLink href="https://leetcode.com/emerald_21/" icon={<Code size={24} />} />
                                <SocialLink href="https://www.hackerrank.com/gallardo_esmera1?hr_r=1" icon={<Terminal size={24} />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);
