import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, X, ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const education = [
    {
        id: 1,
        role: 'B.TECH in Computer Science',
        company: 'Graphic Era University',
        period: '2022 - 2026 (Expected)',
        description: 'CGPA: 8.10/10.0',
        file: "/results/merged_marksheets.pdf",
        type: "pdf"
    },
    {
        id: 2,
        role: '12th Grade (I.S.C)',
        company: 'Dehradun World School',
        period: '2022',
        description: 'Score: 92%',
        file: "/results/12th_result.jpg",
        type: "image"
    },
    {
        id: 3,
        role: '10th Grade (I.C.S.E)',
        company: 'Dehradun World School',
        period: '2020',
        description: 'Score: 94.4%',
        file: "/results/board_certificate.pdf",
        type: "pdf"
    }
];

const certifications = [
    {
        id: 1,
        name: "PwC Cyber Security & Prompt Engineering",
        date: "June 2025",
        issuer: "PwC",
        file: "/certs/pwc complete.pdf",
        type: "pdf"
    },
    {
        id: 2,
        name: "Forage Tata Cybersecurity Security Analyst Job Simulation",
        date: "July 2025",
        issuer: "Forage",
        file: "/certs/Deloitte cyber.pdf",
        type: "pdf"
    },
    {
        id: 3,
        name: "Enhancing Soft Skills and Personality",
        date: "May 2024",
        issuer: "NPTEL IIT Kanpur",
        file: "/certs/nptel.png",
        type: "image"
    },
    {
        id: 4,
        name: "Salesforce Virtual Internship",
        date: "2025",
        issuer: "Salesforce",
        file: "/certs/Salesforce Internship.pdf",
        type: "pdf"
    },
    {
        id: 5,
        name: "n8n Automation",
        date: "2025",
        issuer: "n8n",
        file: "/certs/n8n.pdf",
        type: "pdf"
    }
];

const Experience = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="experience" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <RevealOnScroll width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Certifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Education Column */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="text-purple-500" /> Education
                            </h3>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setSelectedItem(edu)}
                                    className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{edu.role}</h4>
                                            <div className="flex flex-wrap gap-2 text-sm text-purple-400 mb-2">
                                                <span>{edu.company}</span>
                                                <span>•</span>
                                                <span>{edu.period}</span>
                                            </div>
                                            <p className="text-gray-400">{edu.description}</p>
                                        </div>
                                        <ExternalLink size={16} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Certifications Column */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Award className="text-purple-500" /> Certifications
                            </h3>
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    onClick={() => setSelectedItem(cert)}
                                    className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{cert.name}</h4>
                                            <div className="flex flex-wrap gap-2 text-sm text-purple-400">
                                                <span>{cert.issuer}</span>
                                                <span>•</span>
                                                <span>{cert.date}</span>
                                            </div>
                                        </div>
                                        <ExternalLink size={16} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Viewer Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 rounded-2xl p-4 max-w-4xl w-full max-h-[90vh] overflow-hidden relative border border-gray-700 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <h3 className="text-2xl font-bold mb-4 pr-12">{selectedItem.role || selectedItem.name}</h3>

                            <div className="w-full h-[calc(90vh-100px)] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                                {selectedItem.type === 'image' ? (
                                    <img
                                        src={selectedItem.file}
                                        alt={selectedItem.role || selectedItem.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                ) : (
                                    <iframe
                                        src={selectedItem.file}
                                        title={selectedItem.role || selectedItem.name}
                                        className="w-full h-full border-0"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
