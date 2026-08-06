import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Play, X, Eraser, Trash, Plus, Minus, GithubLogo } from "@phosphor-icons/react";
import ht from "../assets/images/ht.png";
import lovebets from "../assets/images/lovebets_home.png";
import particles from "../assets/videos/particles.mp4";

export const Projects = () => {
    const { t } = useLanguage();
    const [demoOpen, setDemoOpen] = useState(false);

    const projects = [
        {
            title: t.projects.items[0].title, // Pikers
            description: t.projects.items[0].description,
            isTerminal: true, // Use terminal mockup
            tags: ["Python", "Open Source", "CLI"],
            link: "https://github.com/pikers/piker"
        },
        {
            title: t.projects.items[1].title, // Particle Simulator
            description: t.projects.items[1].description,
            videoUrl: particles,
            tags: ["Python", "Pygame", "Simulation", "HTML5 Canvas"],
            link: "https://github.com/esmegl/particle_simulator",
            hasDemo: true
        },
        {
            title: t.projects.items[2].title, // Lovebets
            description: t.projects.items[2].description,
            imgUrl: lovebets,
            tags: ["C++", "Vue.js", "TypeScript", "Smart Contracts", "Telos Blockchain"],
            link: "https://github.com/esmegl/love_bets_contracts",
            secondLink: "https://github.com/esmegl/lovebets-ui"
        },
        {
            title: t.projects.items[3].title, // Webpage Design
            description: t.projects.items[3].description,
            imgUrl: ht,
            tags: ["Angular", "Frontend", "Design", "CSS"],
            link: "#"
        },
    ];

    return (
        <section className="py-20 bg-dark relative overflow-hidden" id="projects">
            {/* Background elements */}
            <div className="absolute top-[10%] -left-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        {t.projects.title}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.projects.subtitle}
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-secondary/40 transition-all duration-300 flex flex-col h-full shadow-lg"
                        >
                            {/* Project Media Block */}
                            <div className="h-56 overflow-hidden relative group bg-gray-900 flex items-center justify-center">
                                {project.isTerminal ? (
                                    /* Terminal Mockup for CLI Tools */
                                    <div className="w-full h-full font-mono text-xs p-4 flex flex-col justify-start bg-[#0d1117] text-gray-300">
                                        <div className="flex items-center gap-1.5 pb-3 border-b border-gray-800 mb-3 shrink-0">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                            <span className="text-[10px] text-gray-500 ml-2">pikers-cli.py</span>
                                        </div>
                                        <div className="flex-1 overflow-y-auto space-y-1 select-none">
                                            <p className="text-primary font-semibold">esme@dev:~/pikers$ <span className="text-white">python -m pikers --analyse --target source/</span></p>
                                            <p className="text-gray-500">[INFO] Indexing files...</p>
                                            <p className="text-green-400">✓ Parsed 42 modules successfully</p>
                                            <p className="text-gray-400">Generating call graph matrix...</p>
                                            <p className="text-yellow-400">⚡ Complexity score: 14.2 (Optimal)</p>
                                            <p className="text-gray-300">Done. Output generated in reports/matrix.json</p>
                                        </div>
                                    </div>
                                ) : project.videoUrl ? (
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
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-700/50 hover:bg-gray-700 text-white text-sm font-medium transition-colors border border-gray-600/30"
                                        >
                                            <GithubLogo size={18} />
                                            {project.secondLink ? t.projects.links.generic : t.projects.links.viewCode}
                                        </a>
                                    )}
                                    
                                    {project.secondLink && (
                                        <a
                                            href={project.secondLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gray-700/50 hover:bg-gray-700 text-white text-sm font-medium transition-colors border border-gray-600/30"
                                        >
                                            <GithubLogo size={18} />
                                            {t.projects.links.uiRepo}
                                        </a>
                                    )}

                                    {project.hasDemo && (
                                        <button
                                            onClick={() => setDemoOpen(true)}
                                            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-medium transition-all shadow-md shadow-primary/10"
                                        >
                                            <Play size={18} weight="fill" />
                                            {t.projects.links.playDemo}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Particle Simulator Live Demo Modal */}
            <AnimatePresence>
                {demoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            className="bg-gray-800 border border-gray-700 rounded-3xl p-6 w-full max-w-lg shadow-2xl relative"
                        >
                            <button
                                onClick={() => setDemoOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-700/50 p-2 rounded-full hover:bg-gray-700 transition-all"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                                Particle Simulator Demo
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {t.language === "es" 
                                    ? "Haz clic y arrastra sobre el lienzo para pintar elementos. ¡Observa la física de fluidos e interacciones de gravedad!"
                                    : "Click and drag on the canvas to draw elements. Watch the gravity physics and fluid interactions!"}
                            </p>

                            <SandBoxCanvas width={360} height={240} language={t.language} />

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={() => setDemoOpen(false)}
                                    className="py-2.5 px-6 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors text-sm"
                                >
                                    {t.projects.links.closeDemo}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

/* --- SandBox Canvas Component for Interactive Falling-Sand Game --- */
const SandBoxCanvas = ({ width, height, language }) => {
    const canvasRef = useRef(null);
    const [brushType, setBrushType] = useState(1); // 1 = Sand, 2 = Water, 3 = Wood (Wall), 0 = Erase
    const [brushSize, setBrushSize] = useState(3);
    const [isDrawing, setIsDrawing] = useState(false);

    // Grid details (scaled down representation for physics speed)
    const cols = 90;
    const rows = 60;
    const gridRef = useRef(new Uint8Array(cols * rows));

    // Colors mapping: 0 = background, 1 = sand, 2 = water, 3 = wood
    const colors = ["#111827", "#f59e0b", "#3b82f6", "#6b7280"];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;

        const updateGrid = () => {
            const grid = gridRef.current;
            // Iterate bottom-to-top to avoid drawing double steps
            for (let y = rows - 2; y >= 0; y--) {
                for (let x = 0; x < cols; x++) {
                    const i = y * cols + x;
                    const type = grid[i];

                    if (type === 1) { // Sand physics
                        const below = (y + 1) * cols + x;
                        const belowLeft = (y + 1) * cols + (x - 1);
                        const belowRight = (y + 1) * cols + (x + 1);

                        // Fall straight down if empty
                        if (grid[below] === 0) {
                            grid[below] = 1;
                            grid[i] = 0;
                        } 
                        // Fall into water (sand sinks)
                        else if (grid[below] === 2) {
                            grid[below] = 1;
                            grid[i] = 2;
                        }
                        // Diagonal slides
                        else {
                            const leftEmpty = x > 0 && (grid[belowLeft] === 0 || grid[belowLeft] === 2);
                            const rightEmpty = x < cols - 1 && (grid[belowRight] === 0 || grid[belowRight] === 2);

                            if (leftEmpty && rightEmpty) {
                                // Random slide left/right
                                const dir = Math.random() < 0.5 ? -1 : 1;
                                const target = (y + 1) * cols + (x + dir);
                                const currentTargetType = grid[target];
                                grid[target] = 1;
                                grid[i] = currentTargetType;
                            } else if (leftEmpty) {
                                const currentTargetType = grid[belowLeft];
                                grid[belowLeft] = 1;
                                grid[i] = currentTargetType;
                            } else if (rightEmpty) {
                                const currentTargetType = grid[belowRight];
                                grid[belowRight] = 1;
                                grid[i] = currentTargetType;
                            }
                        }
                    } 
                    else if (type === 2) { // Water physics
                        const below = (y + 1) * cols + x;
                        const belowLeft = (y + 1) * cols + (x - 1);
                        const belowRight = (y + 1) * cols + (x + 1);
                        const left = y * cols + (x - 1);
                        const right = y * cols + (x + 1);

                        // Fall down
                        if (grid[below] === 0) {
                            grid[below] = 2;
                            grid[i] = 0;
                        } 
                        // Fall diagonal
                        else {
                            const leftDiagonal = x > 0 && grid[belowLeft] === 0;
                            const rightDiagonal = x < cols - 1 && grid[belowRight] === 0;

                            if (leftDiagonal && rightDiagonal) {
                                const dir = Math.random() < 0.5 ? -1 : 1;
                                grid[(y + 1) * cols + (x + dir)] = 2;
                                grid[i] = 0;
                            } else if (leftDiagonal) {
                                grid[belowLeft] = 2;
                                grid[i] = 0;
                            } else if (rightDiagonal) {
                                grid[belowRight] = 2;
                                grid[i] = 0;
                            } 
                            // Spread left/right
                            else {
                                const leftEmpty = x > 0 && grid[left] === 0;
                                const rightEmpty = x < cols - 1 && grid[right] === 0;

                                if (leftEmpty && rightEmpty) {
                                    const dir = Math.random() < 0.5 ? -1 : 1;
                                    grid[y * cols + (x + dir)] = 2;
                                    grid[i] = 0;
                                } else if (leftEmpty) {
                                    grid[left] = 2;
                                    grid[i] = 0;
                                } else if (rightEmpty) {
                                    grid[right] = 2;
                                    grid[i] = 0;
                                }
                            }
                        }
                    }
                }
            }
        };

        const renderCanvas = () => {
            const grid = gridRef.current;
            ctx.clearRect(0, 0, width, height);

            const cellW = width / cols;
            const cellH = height / rows;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const val = grid[y * cols + x];
                    if (val > 0) {
                        ctx.fillStyle = colors[val];
                        ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5); // Add 0.5 overlap to prevent grid lines
                    }
                }
            }
        };

        const tick = () => {
            updateGrid();
            renderCanvas();
            animationId = requestAnimationFrame(tick);
        };

        // Initialize background canvas once
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = colors[0];
        ctx.fillRect(0, 0, width, height);

        // Run animation frame
        tick();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [width, height]);

    // Handle mouse/touch actions on grid
    const drawOnGrid = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        
        // Calculate coordinates relative to canvas bounding box
        let clientX = e.clientX;
        let clientY = e.clientY;

        // Support touch coordinates
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }

        const canvasX = clientX - rect.left;
        const canvasY = clientY - rect.top;

        // Map canvas coordinates to internal cols/rows grid coordinates
        const gridX = Math.floor((canvasX / rect.width) * cols);
        const gridY = Math.floor((canvasY / rect.height) * rows);

        const grid = gridRef.current;

        // Apply brush size
        const radius = Math.floor(brushSize / 2);
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const targetX = gridX + dx;
                const targetY = gridY + dy;

                if (targetX >= 0 && targetX < cols && targetY >= 0 && targetY < rows) {
                    const idx = targetY * cols + targetX;
                    
                    // Don't overwrite wood walls unless erasing
                    if (brushType === 0 || grid[idx] !== 3 || brushType === 3) {
                        grid[idx] = brushType;
                    }
                }
            }
        }
    };

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        drawOnGrid(e);
    };

    const handleMouseMove = (e) => {
        if (isDrawing) {
            drawOnGrid(e);
        }
    };

    const handleMouseUpOrLeave = () => {
        setIsDrawing(false);
    };

    const clearGrid = () => {
        gridRef.current.fill(0);
    };

    return (
        <div className="flex flex-col items-center select-none">
            {/* Canvas screen */}
            <canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUpOrLeave}
                className="bg-gray-900 border-2 border-gray-700 rounded-2xl cursor-crosshair overflow-hidden touch-none"
                style={{ width: "100%", maxHeight: "280px" }}
            />

            {/* Brush Controls Panel */}
            <div className="mt-4 w-full flex flex-col gap-4 bg-gray-900/40 p-4 rounded-2xl border border-gray-700/50">
                {/* Element Picker */}
                <div className="flex justify-between items-center gap-2">
                    <button
                        onClick={() => setBrushType(1)}
                        className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                            brushType === 1 
                                ? "bg-amber-500/20 border-amber-500 text-amber-300" 
                                : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        {language === "es" ? "Arena" : "Sand"}
                    </button>
                    
                    <button
                        onClick={() => setBrushType(2)}
                        className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                            brushType === 2 
                                ? "bg-blue-500/20 border-blue-500 text-blue-300" 
                                : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        {language === "es" ? "Agua" : "Water"}
                    </button>
                    
                    <button
                        onClick={() => setBrushType(3)}
                        className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                            brushType === 3 
                                ? "bg-gray-500/20 border-gray-500 text-gray-300" 
                                : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                        {language === "es" ? "Pared" : "Wall"}
                    </button>

                    <button
                        onClick={() => setBrushType(0)}
                        className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            brushType === 0 
                                ? "bg-red-500/20 border-red-500 text-red-300" 
                                : "bg-gray-800/50 border-gray-700 text-gray-400 hover:text-gray-200"
                        }`}
                    >
                        <Eraser size={14} />
                        {language === "es" ? "Borrador" : "Eraser"}
                    </button>
                </div>

                {/* Brush size and clear */}
                <div className="flex justify-between items-center text-xs text-gray-400">
                    <div className="flex items-center gap-3 bg-gray-800/50 px-3 py-1.5 rounded-xl border border-gray-700/50">
                        <span>{language === "es" ? "Pincel:" : "Brush:"} {brushSize}px</span>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={() => setBrushSize(prev => Math.max(1, prev - 2))}
                                className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
                            >
                                <Minus size={10} />
                            </button>
                            <button
                                onClick={() => setBrushSize(prev => Math.min(7, prev + 2))}
                                className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
                            >
                                <Plus size={10} />
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={clearGrid}
                        className="py-1.5 px-4 rounded-xl border border-gray-700 hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-all flex items-center gap-1.5"
                    >
                        <Trash size={14} />
                        {language === "es" ? "Limpiar Todo" : "Clear Grid"}
                    </button>
                </div>
            </div>
        </div>
    );
};
