import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import ht from "../assets/images/ht.png";
import lovebets from "../assets/images/lovebets_home.png";
import particles from "../assets/videos/particles.mp4";

export const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: t.projects.items[0].title,
            description: t.projects.items[0].description,
            imgUrl: ht,
            tags: ["Angular", "Frontend", "Design"],
            link: "#"
        },
        {
            title: t.projects.items[1].title,
            description: t.projects.items[1].description,
            videoUrl: particles,
            tags: ["Python", "Pygame", "Simulation"],
            link: "https://github.com/esmegl/particle_simulator"
        },
        {
            title: t.projects.items[2].title,
            description: t.projects.items[2].description,
            imgUrl: lovebets,
            tags: ["C++", "Vue", "Smart Contracts"],
            link: "https://github.com/esmegl/love_bets_contracts",
            secondLink: "https://github.com/esmegl/lovebets-ui"
        },
    ];

    return (
        <section className="py-20 bg-dark" id="projects">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.projects.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-secondary transition-all duration-300 flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative group">
                                {project.videoUrl ? (
                                    <video
                                        src={project.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src={project.imgUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition-colors"
                                        >
                                            {project.secondLink ? t.projects.links.generic : t.projects.links.viewCode}
                                        </a>
                                    )}
                                    {project.secondLink && (
                                        <a
                                            href={project.secondLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition-colors"
                                        >
                                            {t.projects.links.uiRepo}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
