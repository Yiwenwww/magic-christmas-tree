import React, { useState, useEffect } from 'react';

const TreeRow = ({ width, items, lightsOn }) => {
    const [rowItems, setRowItems] = useState([]);

    useEffect(() => {
        // Regenerate row items when width or theme items change
        setRowItems(Array.from({ length: width }).map(() => items[Math.floor(Math.random() * items.length)]));
    }, [width, items]);

    return (
        <div className="flex justify-center text-2xl md:text-4xl leading-tight select-none">
            {rowItems.map((item, i) => (
                <span
                    key={i}
                    className={`inline-block transform transition-all hover:scale-125 cursor-pointer ${lightsOn ? 'animate-pulse' : ''}`}
                    style={{ padding: '0 2px' }}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};

const ChristmasTree = ({ theme, lightsOn, isMagicLoading }) => {
    // Tree structure definition (width of each row)
    const treeLevels = [1, 2, 3, 4, 5, 6, 7, 8, 3, 3];

    return (
        <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl w-full max-w-md flex flex-col items-center min-h-[500px] justify-center transition-all duration-500">
            {/* Topper */}
            <div className={`text-6xl mb-2 drop-shadow-[0_0_15px_rgba(255,255,0,0.5)] transition-transform duration-500 ${lightsOn ? 'animate-pulse' : ''} ${isMagicLoading ? 'scale-0' : 'scale-100'}`}>
                {theme.topper}
            </div>

            {/* Tree Body */}
            <div className={`flex flex-col items-center gap-1 transition-opacity duration-500 ${isMagicLoading ? 'opacity-0' : 'opacity-100'} ${lightsOn ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''}`}>
                {treeLevels.map((width, idx) => (
                    <TreeRow
                        key={`${theme.id}-${idx}`}
                        width={width}
                        items={theme.items}
                        lightsOn={lightsOn}
                    />
                ))}
            </div>

            {/* Tree Base */}
            <div className="mt-2 w-16 h-12 bg-gradient-to-b from-yellow-900 to-amber-950 rounded-b-lg border-t border-black/20"></div>

            {/* Presents Decoration */}
            <div className="flex gap-4 mt-4 text-3xl">
                🎁 🧸 🚂
            </div>
        </div>
    );
};

export default ChristmasTree;
