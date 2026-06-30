import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
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

                        <div className="flex justify-center">
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
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
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Contact;
