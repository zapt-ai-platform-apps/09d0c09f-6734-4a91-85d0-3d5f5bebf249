import React from 'react';
import { FaPaintBrush, FaFillDrip, FaEraser } from 'react-icons/fa';

const ToolBar = ({ currentTool, onToolChange, brushSize, onBrushSizeChange }) => {
    return (
        <div>
            <div className="flex justify-around mb-6">
                <button
                    className={`p-3 rounded-full ${
                        currentTool === 'brush' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'
                    } cursor-pointer`}
                    onClick={() => onToolChange('brush')}
                    title="Brush Tool"
                >
                    <FaPaintBrush className="text-xl" />
                </button>
                <button
                    className={`p-3 rounded-full ${
                        currentTool === 'fill' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'
                    } cursor-pointer`}
                    onClick={() => onToolChange('fill')}
                    title="Fill Tool"
                >
                    <FaFillDrip className="text-xl" />
                </button>
                <button
                    className={`p-3 rounded-full ${
                        currentTool === 'eraser' ? 'bg-indigo-100 text-indigo-800' : 'text-gray-600 hover:bg-gray-100'
                    } cursor-pointer`}
                    onClick={() => onToolChange('eraser')}
                    title="Eraser Tool"
                >
                    <FaEraser className="text-xl" />
                </button>
            </div>
            
            <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">Brush Size: {brushSize}px</label>
                <input
                    type="range"
                    min="1"
                    max="20"
                    value={brushSize}
                    onChange={(e) => onBrushSizeChange(parseInt(e.target.value))}
                    className="w-full box-border"
                />
            </div>
            
            <div className="bg-gray-100 p-3 rounded-lg mt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Tips:</h3>
                <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Use the brush tool for detailed coloring</li>
                    <li>• Fill tool helps color large areas quickly</li>
                    <li>• Eraser lets you correct mistakes</li>
                    <li>• Adjust brush size for different details</li>
                    <li>• Save your work to keep your masterpiece</li>
                </ul>
            </div>
        </div>
    );
};

export default ToolBar;