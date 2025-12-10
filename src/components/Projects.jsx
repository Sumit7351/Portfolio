import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <RevealOnScroll width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all group"
                            >
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-colors"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-3 py-1 bg-gray-700 rounded-full text-purple-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        View Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Projects;
