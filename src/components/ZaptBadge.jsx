import React from 'react';

const ZaptBadge = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <a 
                href="https://www.zapt.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-indigo-700 text-white px-3 py-1 rounded text-xs font-medium hover:bg-indigo-800 transition-colors"
            >
                Made on ZAPT
            </a>
        </div>
    );
};

export default ZaptBadge;