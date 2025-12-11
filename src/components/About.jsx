import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import blockchain from "../assets/images/cyber-security.png";
import game from "../assets/images/game.svg";
import backend from "../assets/images/backend.png";
import web from "../assets/images/devops.png";
import ai from "../assets/images/ai.png";
import illustrations from "../assets/images/ilustration.svg";

export const About = () => {
    const { t } = useLanguage();

    const interests = [
        { title: t.about.interests.cybersecurity, img: blockchain },
        { title: t.about.interests.ai, img: ai },
        { title: t.about.interests.gamedev, img: game },
        { title: t.about.interests.backend, img: backend },
        { title: t.about.interests.devops, img: web },
        { title: t.about.interests.art, img: illustrations },
    ];

    return (
        <section className="py-20 bg-gray-900/50" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                            {t.about.title}
                        </h2>
                        <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                            <p>
                                {t.about.p1}
                            </p>
                            <p>
                                {t.about.p2}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white">{t.about.interestsTitle}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {interests.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex flex-col items-center text-center shadow-lg hover:shadow-primary/20 transition-all"
                                >
                                    <div className="bg-gray-700/50 p-3 rounded-full mb-3">
                                        <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
                                    </div>
                                    <span className="font-medium text-gray-200 text-sm">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
