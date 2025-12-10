import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-purple-400 hover:text-purple-300">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-purple-300 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-xl shadow-2xl mb-8"
                            />
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-800 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                                >
                                    <Github size={20} /> View Code
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>

                            {project.period && (
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-200">Timeline</h3>
                                    <p className="text-purple-400">{project.period}</p>
                                </div>
                            )}

                            {/* Add more sections here if you have more data like 'Challenges', 'Tech Stack Details' etc. */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
