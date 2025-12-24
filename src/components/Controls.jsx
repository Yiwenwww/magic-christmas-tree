import React, { useState } from "react";
import { Palette, Sparkles, Star, Delete } from "lucide-react";
import { generateThemeFromInput } from "../data/themes";

const Controls = ({
    t,
    wishes,
    onAddWish,
    themes,
    activeTheme,
    onSelectTheme,
    setMagicTheme,
    customTheme
}) => {
    const [wishInput, setWishInput] = useState("");
    const [magicInput, setMagicInput] = useState("");

    const handleWishSubmit = (e) => {
        e.preventDefault();
        if (wishInput.trim()) {
            onAddWish(wishInput);
            setWishInput("");
        }
    };

    const handleMagicSubmit = (e) => {
        e.preventDefault();
        if (magicInput.trim()) {
            const newTheme = generateThemeFromInput(magicInput);
            setMagicTheme(newTheme);
            setMagicInput("");
        }
    };

    return (
        <div className="z-20 w-full max-w-md space-y-6 text-white/90">

            {/* --- Section 1: Choose Theme (HIDDEN IN EXPORT) --- */}
            <div
                className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl"
                data-html2canvas-ignore="true"
            >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-300">
                    <Palette className="w-5 h-5" />
                    {t('section_themes')}
                </h2>

                {/* Magic Input */}
                <form onSubmit={handleMagicSubmit} className="mb-6 relative">
                    <input
                        type="text"
                        placeholder={t('magic_placeholder')}
                        value={magicInput}
                        onChange={(e) => setMagicInput(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all placeholder-white/40"
                    />
                    <Sparkles className="absolute left-3 top-3.5 w-5 h-5 text-yellow-300" />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:scale-105 transition-transform"
                    >
                        {t('btn_magic')}
                    </button>
                </form>

                {/* Preset Buttons */}
                <div className="grid grid-cols-3 gap-3">
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => onSelectTheme(theme)}
                            className={`p-2 rounded-xl text-sm font-medium transition-all duration-300 border flex flex-col items-center justify-center min-h-[80px] ${activeTheme.id === theme.id
                                ? "bg-white/20 border-yellow-400 text-yellow-300 scale-105 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                                : "bg-white/5 border-transparent hover:bg-white/10"
                                }`}
                        >
                            <span className="text-2xl mb-1">{theme.topper}</span>
                            <span className="text-center leading-tight">
                                {t('theme_labels')[theme.id] || theme.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* --- Section 2: Wish Wall --- */}
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl max-h-[40vh] flex flex-col">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-pink-300">
                    <Star className="w-5 h-5" />
                    {t('section_wishes')}
                </h2>

                {/* Wish List (Scrollable) - VISIBLE IN EXPORT */}
                <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4 custom-scrollbar min-h-[100px]">
                    {wishes.map((wish) => (
                        <div key={wish.id} className="bg-white/10 p-3 rounded-lg border border-white/5 relative group animate-fade-in-up">
                            <p className="text-sm font-light text-white italic">"{wish.text}"</p>
                            <span className="text-xs text-white/50 block mt-1 text-right">- {wish.author}</span>
                        </div>
                    ))}
                    {wishes.length === 0 && (
                        <p className="text-center text-white/30 text-sm mt-4 italic">No wishes yet... be the first! 🎋</p>
                    )}
                </div>

                {/* Wish Input - HIDDEN IN EXPORT */}
                <form onSubmit={handleWishSubmit} className="flex gap-2" data-html2canvas-ignore="true">
                    <input
                        type="text"
                        placeholder={t('wish_placeholder')}
                        value={wishInput}
                        onChange={(e) => setWishInput(e.target.value)}
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-white/40"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold px-4 py-2 rounded-xl hover:scale-105 transition-transform whitespace-nowrap"
                    >
                        {t('btn_wish')}
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Controls;
