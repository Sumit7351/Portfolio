import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/profile';
import RevealOnScroll from './RevealOnScroll';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-950">
            <div className="container mx-auto px-6">
                <RevealOnScroll width="100%">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                            <p className="text-gray-400">
                                Have a project in mind or just want to say hi? I'd love to hear from you.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-900 rounded-lg text-purple-500">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Email</h4>
                                            <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                                                {profile.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-900 rounded-lg text-purple-500">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Phone</h4>
                                            <a href={`tel:${profile.phone}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                                                {profile.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gray-900 rounded-lg text-purple-500">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">Location</h4>
                                            <p className="text-gray-400">
                                                {profile.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Contact;
