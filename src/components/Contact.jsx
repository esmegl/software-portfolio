import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { EnvelopeSimple, Copy, Check, PaperPlaneTilt } from "@phosphor-icons/react";

export const Contact = () => {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("esmeralda.gallardo@protonmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct mailto link
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoUrl = `mailto:esmeralda.gallardo@protonmail.com?subject=${subject}&body=${body}`;
        
        window.location.href = mailtoUrl;
    };

    return (
        <section className="py-20 bg-dark relative overflow-hidden" id="contact">
            {/* Background decorative gradients */}
            <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        {t.contact.title}
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
                    {/* Left Column: Direct Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 flex flex-col justify-between"
                    >
                        <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 flex flex-col items-center text-center justify-center h-full">
                            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                                <EnvelopeSimple size={32} className="text-primary animate-pulse" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-2">
                                {t.language === "es" ? "Correo Directo" : "Direct Email"}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-6 max-w-xs">
                                {t.language === "es" 
                                    ? "Haz clic abajo para copiar mi dirección de correo electrónico o abrir tu cliente de correo."
                                    : "Click below to copy my email address or open your mail client."}
                            </p>

                            <span className="text-lg font-semibold text-gray-200 bg-gray-900/60 px-4 py-2 rounded-xl border border-gray-800 break-all select-all mb-6">
                                esmeralda.gallardo@protonmail.com
                            </span>

                            <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <button
                                    onClick={handleCopyEmail}
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-700 hover:border-primary/50 bg-gray-800/40 text-gray-200 hover:text-white transition-all text-sm font-medium"
                                >
                                    {copied ? (
                                        <>
                                            <Check size={18} className="text-green-500" />
                                            <span>{t.contact.copied}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={18} />
                                            <span>{t.contact.copyEmail}</span>
                                        </>
                                    )}
                                </button>
                                
                                <a
                                    href="mailto:esmeralda.gallardo@protonmail.com"
                                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white transition-all text-sm font-medium"
                                >
                                    <PaperPlaneTilt size={18} />
                                    <span>{t.language === "es" ? "Escribir" : "Email Me"}</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 space-y-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="name">
                                    {t.contact.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Jane Doe"
                                    className="w-full bg-gray-900/60 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">
                                    {t.contact.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="jane@example.com"
                                    className="w-full bg-gray-900/60 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="message">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows="5"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={t.language === "es" ? "Escribe tu mensaje aquí..." : "Write your message here..."}
                                    className="w-full bg-gray-900/60 border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium transition-all cursor-pointer shadow-lg shadow-primary/20"
                            >
                                <PaperPlaneTilt size={18} />
                                <span>{t.contact.send}</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
