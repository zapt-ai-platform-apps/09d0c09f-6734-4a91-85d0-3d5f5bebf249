import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ColoringCanvas from '../components/ColoringCanvas';
import ColorPalette from '../components/ColorPalette';
import ToolBar from '../components/ToolBar';
import { templates } from '../data/templates';

const ColoringPage = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [currentColor, setCurrentColor] = useState('#4ECDC4');
    const [tool, setTool] = useState('brush'); // brush, fill, eraser
    const [brushSize, setBrushSize] = useState(5);
    const [savedImage, setSavedImage] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        console.log(`Loading template with ID: ${id}`);
        const templateData = templates.find(t => t.id === parseInt(id));
        if (templateData) {
            setTemplate(templateData);
            console.log(`Found template: ${templateData.title}`);
        }
    }, [id]);

    const handleColorChange = (color) => {
        setCurrentColor(color.hex);
        console.log(`Color changed to: ${color.hex}`);
    };

    const handleToolChange = (newTool) => {
        setTool(newTool);
        console.log(`Tool changed to: ${newTool}`);
    };

    const handleBrushSizeChange = (size) => {
        setBrushSize(size);
        console.log(`Brush size changed to: ${size}px`);
    };

    const handleSaveImage = () => {
        if (isSaving) return;
        
        setIsSaving(true);
        console.log('Saving colored image...');
        
        try {
            const canvasElement = document.querySelector('canvas');
            if (canvasElement) {
                const dataUrl = canvasElement.toDataURL('image/png');
                setSavedImage(dataUrl);
                
                // Save to localStorage
                localStorage.setItem(`savedColoring_${id}`, dataUrl);
                
                // Trigger download
                const link = document.createElement('a');
                link.download = `peaceful-palette-${template.title.toLowerCase().replace(/\s+/g, '-')}.png`;
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                console.log('Image saved successfully');
            }
        } catch (error) {
            console.error('Error saving image:', error);
        } finally {
            setIsSaving(false);
        }
    };

    if (!template) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-700">
                Loading template...
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <header className="mb-6 flex justify-between items-center">
                <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Gallery
                </Link>
                <h1 className="text-2xl font-bold text-indigo-800">{template.title}</h1>
                <button 
                    onClick={handleSaveImage}
                    disabled={isSaving}
                    className={`px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer ${isSaving ? 'opacity-50' : ''}`}
                >
                    {isSaving ? 'Saving...' : 'Save Image'}
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-3/4 bg-white rounded-lg shadow-md p-4">
                    <ColoringCanvas 
                        template={template} 
                        currentColor={currentColor} 
                        tool={tool}
                        brushSize={brushSize}
                    />
                </div>
                
                <div className="md:w-1/4">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                        <h2 className="text-lg font-semibold text-indigo-700 mb-3">Color Palette</h2>
                        <ColorPalette 
                            currentColor={currentColor} 
                            onColorChange={handleColorChange} 
                        />
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold text-indigo-700 mb-3">Tools</h2>
                        <ToolBar 
                            currentTool={tool} 
                            onToolChange={handleToolChange}
                            brushSize={brushSize}
                            onBrushSizeChange={handleBrushSizeChange}
                        />
                    </div>
                </div>
            </div>

            {savedImage && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 mb-2">Your image has been saved!</p>
                    <p className="text-sm text-gray-600">You can find it in your downloads folder, or continue coloring.</p>
                </div>
            )}
        </div>
    );
};

export default ColoringPage;