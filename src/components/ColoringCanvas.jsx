import React, { useRef, useEffect, useState } from 'react';
import { Stage, Layer, Line, Path } from 'react-konva';

const ColoringCanvas = ({ template, currentColor, tool, brushSize }) => {
    const stageRef = useRef(null);
    const [lines, setLines] = useState([]);
    const [svgPaths, setSvgPaths] = useState([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef(null);

    // Parse SVG data and prepare it for rendering
    useEffect(() => {
        if (template?.svgData) {
            console.log('Parsing template SVG data');
            const parser = new DOMParser();
            const svg = parser.parseFromString(template.svgData, "image/svg+xml");
            const paths = Array.from(svg.querySelectorAll('path, circle, rect, line'));
            
            const extractedPaths = paths.map((path, index) => {
                let pathData = '';
                
                if (path.tagName === 'path') {
                    pathData = path.getAttribute('d');
                } else if (path.tagName === 'circle') {
                    const cx = parseFloat(path.getAttribute('cx'));
                    const cy = parseFloat(path.getAttribute('cy'));
                    const r = parseFloat(path.getAttribute('r'));
                    // Create a circle path
                    pathData = `M ${cx - r},${cy} a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 ${-r * 2},0`;
                } else if (path.tagName === 'rect') {
                    const x = parseFloat(path.getAttribute('x'));
                    const y = parseFloat(path.getAttribute('y'));
                    const width = parseFloat(path.getAttribute('width'));
                    const height = parseFloat(path.getAttribute('height'));
                    // Create a rectangle path
                    pathData = `M ${x},${y} h ${width} v ${height} h ${-width} Z`;
                } else if (path.tagName === 'line') {
                    const x1 = parseFloat(path.getAttribute('x1'));
                    const y1 = parseFloat(path.getAttribute('y1'));
                    const x2 = parseFloat(path.getAttribute('x2'));
                    const y2 = parseFloat(path.getAttribute('y2'));
                    // Create a line path
                    pathData = `M ${x1},${y1} L ${x2},${y2}`;
                }

                return {
                    id: index,
                    data: pathData,
                    fill: 'transparent',
                    stroke: '#000000',
                    strokeWidth: 2
                };
            });
            
            setSvgPaths(extractedPaths);
            console.log(`Extracted ${extractedPaths.length} paths from template`);
        }
    }, [template]);

    // Resize canvas when window resizes
    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                // Maintain aspect ratio, assuming our SVG viewBox is square
                setStageSize({
                    width: width,
                    height: width
                });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const handleMouseDown = (e) => {
        if (tool === 'fill') {
            handleFill(e);
            return;
        }

        setIsDrawing(true);
        const pos = e.target.getStage().getPointerPosition();
        
        setLines([...lines, { 
            tool,
            points: [pos.x, pos.y],
            color: tool === 'eraser' ? '#FFFFFF' : currentColor,
            strokeWidth: brushSize
        }]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) {
            return;
        }
        
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);
        
        setLines([...lines.slice(0, -1), lastLine]);
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    const handleFill = (e) => {
        // This is a simplified fill algorithm
        const stage = e.target.getStage();
        const pointerPos = stage.getPointerPosition();
        
        // Check if the click is on a path
        const shapes = stage.find('Path');
        
        for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i];
            
            if (shape.getAttr('id') && shape.getAttr('id').startsWith('template')) {
                const id = parseInt(shape.getAttr('id').split('-')[1]);
                
                // Update the fill color of the path in our state
                const updatedPaths = [...svgPaths];
                if (updatedPaths[id]) {
                    updatedPaths[id] = {
                        ...updatedPaths[id],
                        fill: currentColor
                    };
                    setSvgPaths(updatedPaths);
                    console.log(`Filled path ${id} with color ${currentColor}`);
                    break;
                }
            }
        }
    };

    return (
        <div ref={containerRef} className="w-full">
            <Stage
                width={stageSize.width}
                height={stageSize.height}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                ref={stageRef}
                className="bg-white border border-gray-200 rounded"
            >
                <Layer>
                    {/* Render template paths */}
                    {svgPaths.map((path, i) => (
                        <Path
                            key={`template-${i}`}
                            id={`template-${i}`}
                            data={path.data}
                            fill={path.fill}
                            stroke={path.stroke}
                            strokeWidth={path.strokeWidth}
                        />
                    ))}
                    
                    {/* Render user's drawing */}
                    {lines.map((line, i) => (
                        <Line
                            key={i}
                            points={line.points}
                            stroke={line.color}
                            strokeWidth={line.strokeWidth}
                            tension={0.5}
                            lineCap="round"
                            lineJoin="round"
                            globalCompositeOperation={
                                line.tool === 'eraser' ? 'destination-out' : 'source-over'
                            }
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
};

export default ColoringCanvas;