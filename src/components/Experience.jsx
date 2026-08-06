import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Briefcase, MapPin } from "@phosphor-icons/react";

export const Experience = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gray-900/30 relative overflow-hidden" id="experience">
            {/* Background elements */}
            <div className="absolute top-[30%] -right-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Timeline Line - Left Aligned */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-gray-800" />

                    <div className="space-y-12">
                        {t.experience.items.map((item, index) => {
                            return (
                                <div key={index} className="relative flex flex-col items-stretch">
                                    {/* Dot Icon - Left Aligned */}
                                    <div className="absolute left-4 transform -translate-x-1/2 top-6 z-10 w-8 h-8 rounded-full bg-dark border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                        <Briefcase size={16} className="text-secondary" />
                                    </div>

                                    {/* Content container - Expanded Width */}
                                    <div className="w-full pl-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700/50 hover:border-primary/40 hover:bg-gray-800/80 transition-all duration-300 shadow-xl"
                                        >
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20 mb-3">
                                                {item.period}
                                            </span>

                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {item.role}
                                            </h3>

                                            <div className="text-secondary font-semibold text-md mb-3 flex flex-wrap items-center gap-2 justify-start">
                                                <span>{item.company}</span>
                                                <span className="text-gray-500">•</span>
                                                <span className="text-gray-400 text-sm flex items-center gap-1 font-normal">
                                                    <MapPin size={14} />
                                                    {item.location}
                                                </span>
                                            </div>

                                            {/* Technologies used chips */}
                                            <div className="flex flex-wrap gap-2 mb-5 justify-start">
                                                {item.tech.split(" · ").map((tech, i) => (
                                                    <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-gray-900/60 rounded text-gray-300 border border-gray-800">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Details bullets */}
                                            <ul className="text-gray-300 text-sm space-y-2 text-left list-none">
                                                {item.bullets.map((bullet, bulletIdx) => (
                                                    <li key={bulletIdx} className="leading-relaxed flex items-start gap-2">
                                                        <span className="text-primary mt-1.5 shrink-0 select-none">▸</span>
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
