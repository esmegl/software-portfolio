import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// Import images
import angular from "../assets/images/angular.png";
import cplus from "../assets/images/c-.png";
import css from "../assets/images/css.png";
import django from "../assets/images/django.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import springboot from "../assets/images/springboot.png";
import sql from "../assets/images/sql-server.png";
import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import mariadb from "../assets/images/mariadb.png";
import kotlin from "../assets/images/kotlin.svg";
import kafka from "../assets/images/kafka.svg";
import postgres from "../assets/images/postgresql.svg";

export const Skills = () => {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t.skills.categories.languages,
            skills: [
                { name: "Python", img: py },
                { name: "Java", img: java },
                { name: "Kotlin", img: kotlin },
                { name: "C++", img: cplus },
                { name: "SQL", img: sql },
                { name: "JavaScript", img: js },
            ]
        },
        {
            title: t.skills.categories.frameworks,
            skills: [
                { name: "React", img: react },
                { name: "Vue", img: vue },
                { name: "Angular", img: angular },
                { name: "Django", img: django },
                { name: "Spring Boot", img: springboot },
            ]
        },
        {
            title: t.skills.categories.tools,
            skills: [
                { name: "Git", img: git },
                { name: "Docker", img: docker },
                { name: "Apache Kafka", img: kafka },
                { name: "PostgreSQL", img: postgres },
                { name: "MariaDB", img: mariadb },
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

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: (index * 0.05) + (catIndex * 0.1) }}
                                        viewport={{ once: true }}
                                        className="group flex flex-col items-center justify-center p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/80 transition-all duration-300 border border-gray-700/50 hover:border-primary/50 hover:-translate-y-1"
                                    >
                                        <div className="h-12 w-12 mb-3 flex items-center justify-center">
                                            <img src={skill.img} alt={skill.name} className="max-h-full max-w-full group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                                        </div>
                                        <h4 className="text-gray-400 font-medium text-sm group-hover:text-white transition-colors">
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
