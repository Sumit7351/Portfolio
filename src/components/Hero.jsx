import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data/profile';
import RevealOnScroll from './RevealOnScroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 z-10 text-center">
                <RevealOnScroll width="100%">
                    <h2 className="text-xl md:text-2xl text-purple-400 font-medium mb-4">
                        Hello, I'm {profile.name}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        {profile.role} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Extraordinaire</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        {profile.bio}
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                        >
                            View Projects <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-full font-medium text-gray-300 flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white transition-all"
                        >
                            Download Resume <Download size={20} />
                        </motion.a>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
