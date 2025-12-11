import { LinkedinLogo, GithubLogo, Code, Terminal, Heart } from '@phosphor-icons/react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="py-8 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span>© {new Date().getFullYear()} Esmeralda Gallardo.</span>
                    <span className="hidden md:inline">|</span>
                    <span className="flex items-center">{t.footer.madeWith} <Heart size={16} weight="fill" className="text-red-500 mx-1" /> {t.language === 'es' ? 'y React' : 'and React'}</span>
                </div>

                <div className="flex space-x-6">
                    <SocialLink href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/" icon={<LinkedinLogo size={20} />} />
                    <SocialLink href="https://github.com/esmegl" icon={<GithubLogo size={20} />} />
                    <SocialLink href="https://leetcode.com/emerald_21/" icon={<Code size={20} />} />
                    <SocialLink href="https://www.hackerrank.com/gallardo_esmera1?hr_r=1" icon={<Terminal size={20} />} />
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
    >
        {icon}
    </a>
);
