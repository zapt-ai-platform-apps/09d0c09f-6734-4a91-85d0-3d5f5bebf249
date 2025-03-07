import React from 'react';
import { Link } from 'react-router-dom';
import { templates } from '../data/templates';

const TemplateGallery = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {templates.map(template => (
                <Link 
                    to={`/coloring/${template.id}`} 
                    key={template.id}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                    <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                        <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: template.svgData }} />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-indigo-700">{template.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{template.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TemplateGallery;