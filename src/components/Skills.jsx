import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Code, Terminal, GitBranch, Gear, FileCode, Shield, FileText } from "@phosphor-icons/react";

// Import images
import angular from "../assets/images/angular.png";
import cplus from "../assets/images/c-.png";
import django from "../assets/images/django.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import springboot from "../assets/images/springboot.png";
import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import mariadb from "../assets/images/mariadb.png";
import kotlin from "../assets/images/kotlin.svg";
import kafka from "../assets/images/kafka.svg";
import postgres from "../assets/images/postgresql.svg";

const SkillFallbackIcon = ({ name }) => {
    const n = name.toLowerCase();
    if (n.includes("c#") || n.includes(".net")) return <FileCode size={24} className="text-blue-400" />;
    if (n.includes("github") || n.includes("actions")) return <GitBranch size={24} className="text-purple-400" />;
    if (n.includes("teamcity")) return <Gear size={24} className="text-red-400" />;
    if (n.includes("linux")) return <Terminal size={24} className="text-yellow-500" />;
    if (n.includes("agile") || n.includes("scrum")) return <Gear size={24} className="text-green-400" />;
    if (n.includes("doc")) return <FileText size={24} className="text-emerald-400" />;
    if (n.includes("detection") || n.includes("anomaly")) return <Shield size={24} className="text-orange-400" />;
    if (n.includes("gathering") || n.includes("requirements")) return <Shield size={24} className="text-cyan-400" />;
    return <Code size={24} className="text-primary" />;
};

export const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t.skills.categories.professional,
            skills: [
                { name: "Kotlin", img: kotlin },
                { name: "Java", img: java },
                { name: "Spring Boot", img: springboot },
                { name: "C# (.NET)", img: null },
                { name: "Apache Kafka", img: kafka },
                { name: "PostgreSQL", img: postgres },
                { name: "Docker", img: docker },
                { name: "Git", img: git },
                { name: "GitHub Actions", img: null },
                { name: "TeamCity", img: null },
                { name: "Linux", img: null },
            ]
        },
        {
            title: t.skills.categories.academic,
            skills: [
                { name: "Python", img: py },
                { name: "JavaScript", img: js },
                { name: "React", img: react },
                { name: "Vue", img: vue },
                { name: "Angular", img: angular },
                { name: "Django", img: django },
                { name: "MariaDB", img: mariadb },
                { name: "C++", img: cplus },
            ]
        },
        {
            title: t.skills.categories.methodologies,
            skills: [
                { name: "Agile / Scrum", img: null },
                { name: "Technical Documentation", img: null },
                { name: "Anomaly Detection", img: null },
                { name: "Requirements Gathering", img: null },
            ]
        }
    ];

    return (
        <section className="py-20 bg-dark relative" id="skills">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        {t.skills.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="text-2xl font-semibold text-white mb-8 border-l-4 border-primary pl-4"
                            >
                                {category.title}
                            </motion.h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (index * 0.05) + (catIndex * 0.1) }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col items-center justify-center p-5 bg-gray-800/20 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 border border-gray-700/30 hover:border-primary/40 hover:-translate-y-1 shadow-lg hover:shadow-primary/5"
                                    >
                                        <div className="h-12 w-12 mb-3 flex items-center justify-center">
                                            {skill.img ? (
                                                <img 
                                                    src={skill.img} 
                                                    alt={skill.name} 
                                                    className="max-h-full max-w-full group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" 
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-2xl bg-gray-700/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 border border-gray-700/50">
                                                    <SkillFallbackIcon name={skill.name} />
                                                </div>
                                            )}
                                        </div>
                                        <h4 className="text-gray-400 font-medium text-sm text-center group-hover:text-white transition-colors">
                                            {skill.name}
                                        </h4>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
