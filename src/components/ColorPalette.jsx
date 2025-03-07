import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const predefinedColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', 
    '#FF006E', '#8338EC', '#3A86FF', '#38b000', '#9381ff',
    '#FB8500', '#219EBC', '#023047', '#FFAFCC', '#CDB4DB',
    '#FFADAD', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#caffbf',
    '#457b9d', '#1d3557', '#f1faee', '#e63946', '#b56576'
];

const ColorPalette = ({ currentColor, onColorChange }) => {
    const [showCustomPicker, setShowCustomPicker] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-5 gap-2 mb-4">
                {predefinedColors.map(color => (
                    <button
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                            currentColor === color ? 'ring-2 ring-indigo-500 ring-offset-2' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onColorChange({ hex: color })}
                        aria-label={`Select color ${color}`}
                    />
                ))}
            </div>
            
            <button 
                className="text-indigo-600 text-sm hover:text-indigo-800 flex items-center justify-center w-full mt-2 cursor-pointer"
                onClick={() => setShowCustomPicker(!showCustomPicker)}
            >
                {showCustomPicker ? 'Hide Custom Colors' : 'Choose Custom Color'}
            </button>
            
            {showCustomPicker && (
                <div className="mt-4">
                    <SketchPicker 
                        color={currentColor}
                        onChange={onColorChange}
                        disableAlpha={true}
                        width="100%"
                    />
                </div>
            )}
            
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">Current Color:</span>
                <div className="flex items-center">
                    <div 
                        className="w-6 h-6 rounded-full mr-2"
                        style={{ backgroundColor: currentColor }}
                    />
                    <span className="text-sm font-mono">{currentColor}</span>
                </div>
            </div>
        </div>
    );
};

export default ColorPalette;