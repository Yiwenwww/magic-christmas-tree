import React, { useMemo } from 'react';

const Snowflakes = () => {
    const flakes = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        opacity: Math.random(),
        size: Math.random() * 10 + 5
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute text-white animate-fall"
                    style={{
                        left: flake.left,
                        top: -20,
                        fontSize: `${flake.size}px`,
                        opacity: flake.opacity,
                        animation: `fall ${flake.animationDuration} linear infinite`
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
};

export default Snowflakes;
