import React, { useState, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = ({ t }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed)", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative">
            <audio ref={audioRef} loop src="/assets/jingle_bells.mp3" />
            <button
                onClick={togglePlay}
                className={`p-2 rounded-full backdrop-blur-md transition-all flex items-center gap-2 ${isPlaying ? 'bg-green-600/80 text-white shadow-[0_0_15px_rgba(22,163,74,0.5)]' : 'bg-white/10 text-white/50'}`}
            >
                {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-xs font-bold hidden md:block">{isPlaying ? t('music_pause') : t('music_play')}</span>
            </button>
        </div>
    );
};

export default AudioPlayer;
