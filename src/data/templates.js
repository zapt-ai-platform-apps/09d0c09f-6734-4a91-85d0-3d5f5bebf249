export const templates = [
    {
        id: 1,
        title: 'Mandala Pattern',
        description: 'Circular symmetrical pattern for focused coloring.',
        thumbnail: 'PLACEHOLDER',
        svgData: `<svg viewBox="0 0 400 400">
            <!-- Simplified mandala pattern -->
            <circle cx="200" cy="200" r="150" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="200" cy="200" r="30" fill="none" stroke="#000" stroke-width="2" />
            <!-- Add more pattern elements -->
            <path d="M200,50 L200,350 M50,200 L350,200" stroke="#000" stroke-width="2" />
            <path d="M120,120 L280,280 M120,280 L280,120" stroke="#000" stroke-width="2" />
        </svg>`
    },
    {
        id: 2,
        title: 'Floral Pattern',
        description: 'Relaxing flower pattern to reduce stress.',
        thumbnail: 'PLACEHOLDER',
        svgData: `<svg viewBox="0 0 400 400">
            <!-- Simplified floral pattern -->
            <circle cx="200" cy="200" r="50" fill="none" stroke="#000" stroke-width="2" />
            <!-- Petals -->
            <path d="M200,150 Q250,100 200,50 Q150,100 200,150" fill="none" stroke="#000" stroke-width="2" />
            <path d="M200,150 Q300,150 350,200 Q300,250 200,250" fill="none" stroke="#000" stroke-width="2" />
            <path d="M200,250 Q250,300 200,350 Q150,300 200,250" fill="none" stroke="#000" stroke-width="2" />
            <path d="M200,250 Q100,250 50,200 Q100,150 200,150" fill="none" stroke="#000" stroke-width="2" />
        </svg>`
    },
    {
        id: 3,
        title: 'Abstract Geometric',
        description: 'Modern abstract pattern with geometric shapes.',
        thumbnail: 'PLACEHOLDER',
        svgData: `<svg viewBox="0 0 400 400">
            <!-- Simplified geometric pattern -->
            <rect x="50" y="50" width="100" height="100" fill="none" stroke="#000" stroke-width="2" />
            <rect x="250" y="50" width="100" height="100" fill="none" stroke="#000" stroke-width="2" />
            <rect x="50" y="250" width="100" height="100" fill="none" stroke="#000" stroke-width="2" />
            <rect x="250" y="250" width="100" height="100" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="#000" stroke-width="2" />
            <path d="M150,150 L250,250 M150,250 L250,150" stroke="#000" stroke-width="2" />
        </svg>`
    },
    {
        id: 4,
        title: 'Zen Garden',
        description: 'Peaceful zen-inspired pattern for relaxation.',
        thumbnail: 'PLACEHOLDER',
        svgData: `<svg viewBox="0 0 400 400">
            <!-- Simplified zen pattern -->
            <path d="M50,150 C100,100 150,200 200,150 C250,100 300,200 350,150" fill="none" stroke="#000" stroke-width="2" />
            <path d="M50,200 C100,150 150,250 200,200 C250,150 300,250 350,200" fill="none" stroke="#000" stroke-width="2" />
            <path d="M50,250 C100,200 150,300 200,250 C250,200 300,300 350,250" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="150" cy="100" r="20" fill="none" stroke="#000" stroke-width="2" />
            <circle cx="250" cy="100" r="20" fill="none" stroke="#000" stroke-width="2" />
        </svg>`
    }
];