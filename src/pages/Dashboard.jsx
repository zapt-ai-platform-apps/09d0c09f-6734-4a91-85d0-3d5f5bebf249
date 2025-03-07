import React from 'react';
import TemplateGallery from '../components/TemplateGallery';

const Dashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-indigo-800">Peaceful Palette</h1>
                <p className="text-xl text-gray-600 mt-2">A coloring experience for relaxation and stress relief</p>
            </header>
            
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Choose a Design to Color</h2>
                <TemplateGallery />
            </section>

            <section className="bg-indigo-50 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-indigo-700 mb-3">Benefits of Coloring for Stress Relief</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Reduces anxiety and stress by focusing the mind</li>
                    <li>Encourages mindfulness and living in the present moment</li>
                    <li>Activates both hemispheres of the brain for full engagement</li>
                    <li>Provides a creative outlet with no pressure to perform</li>
                    <li>Offers a calming break from digital screens and daily worries</li>
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;