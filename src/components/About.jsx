import React from 'react';
import { profile } from '../data/profile';
import RevealOnScroll from './RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <RevealOnScroll width="100%">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            {profile.bio}
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                            or gaming. I believe in continuous learning and am always looking for new challenges to solve.
                        </p>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default About;
