import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
