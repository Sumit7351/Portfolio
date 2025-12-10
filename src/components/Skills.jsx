import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const skills = [
    { category: "Languages", items: ["C", "C++", "Python", "SQL"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
    { category: "Machine Learning", items: ["YOLO", "OpenCV", "Scikit-learn"] },
    { category: "CS Fundamentals", items: ["Data Structures", "Operating Systems", "Computer Networks", "DBMS"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "VS Code"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll width="100%">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Technical Arsenal
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={skillGroup.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
                                >
                                    <h3 className="text-xl font-bold mb-6 text-gray-100 flex items-center gap-2">
                                        <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                        {skillGroup.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {skillGroup.items.map((item, i) => (
                                            <motion.span
                                                key={item}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                                                    borderColor: "rgba(168, 85, 247, 0.8)",
                                                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
                                                }}
                                                className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 text-sm border border-gray-700 cursor-default transition-all duration-300"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Skills;
