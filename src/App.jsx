import { useState, useEffect } from "react";
import ChristmasTree from "./components/ChristmasTree";
import Controls from "./components/Controls";
import Snowflakes from "./components/Snowflakes";
import AudioPlayer from "./components/AudioPlayer";
import { PRESET_THEMES, INITIAL_WISHES } from "./data/themes";
import { LOCALES } from "./data/locales";
import { Languages, Sparkles, Snowflake } from "lucide-react";

import ExportButton from "./components/ExportButton";

const App = () => {
  // Locale State (Default: CN)
  const [lang, setLang] = useState('cn');

  // Helper to translate
  const t = (key) => LOCALES[lang][key] || key;

  // Initial State from Data
  const [activeTheme, setActiveTheme] = useState(PRESET_THEMES[0]);
  const [customTheme, setCustomTheme] = useState(null); // For Magic Theme
  const [wishes, setWishes] = useState(
    LOCALES[lang].default_wishes || INITIAL_WISHES
  );

  // Update wishes when Language changes
  useEffect(() => {
    if (LOCALES[lang].default_wishes) {
      setWishes(prev => {
        // Keep user added wishes (if any) but swap defaults?
        // For simplicity, just resetting to defaults for the demo feel when switching lang.
        return LOCALES[lang].default_wishes;
      });
    }
  }, [lang]);

  const [isLightsOn, setIsLightsOn] = useState(true);
  const [isSnowing, setIsSnowing] = useState(true);

  // Magic Theme Handler
  const handleMagicTheme = (newTheme) => {
    setCustomTheme(newTheme);
    setActiveTheme(newTheme);
  };

  const handleAddWish = (text) => {
    const newWish = { id: Date.now(), text, author: "You" };
    setWishes([newWish, ...wishes]);
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'cn' ? 'en' : 'cn');
  };

  return (
    <div id="christmas-app-root" className={`relative w-full h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center bg-gradient-to-br ${activeTheme.bg} transition-colors duration-1000`}>

      {/* Background Ambience */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isLightsOn ? 'opacity-100' : 'opacity-30'}`}>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20`} />
      </div>

      {/* Snow Effect */}
      {isSnowing && <Snowflakes count={50} />}

      {/* Top Controls (Audio + Toggles + Lang) - HIDDEN IN EXPORT */}
      <div
        className="absolute top-4 right-4 z-50 flex gap-3 items-center flex-wrap justify-end"
        data-html2canvas-ignore="true"
      >
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/10 transition-all flex items-center gap-1 px-3 h-10"
        >
          <Languages className="w-4 h-4" />
          <span className="text-xs font-bold">{lang === 'cn' ? 'CN' : 'EN'}</span>
        </button>

        <ExportButton t={t} />

        <AudioPlayer t={t} />

        <button
          onClick={() => setIsLightsOn(!isLightsOn)}
          className={`w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all ${isLightsOn ? 'bg-yellow-500/80 text-white shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-white/10 text-white/50'}`}
          title={t('toggle_light')}
        >
          <Sparkles className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsSnowing(!isSnowing)}
          className={`w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all ${isSnowing ? 'bg-blue-500/80 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/10 text-white/50'}`}
          title={t('toggle_snow')}
        >
          <Snowflake className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content: Tree & Controls */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center p-4 gap-8 md:gap-16">

        {/* Left: The Tree */}
        <div className="flex-1 flex justify-center items-center h-[50vh] md:h-auto scale-90 md:scale-100">
          <ChristmasTree
            theme={activeTheme}
            isLightsOn={isLightsOn}
            wishes={wishes}
          />
        </div>

        {/* Right: Controls */}
        <div className="flex-1 w-full max-w-md">
          {/* Header Title */}
          <div className="text-center md:text-left mb-6">
            <h1 className={`text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-white drop-shadow-lg ${activeTheme.accent} transition-colors duration-500`}>
              {t('title')}
            </h1>
            <p className="text-white/60 mt-2 text-lg font-light tracking-wide">
              {t('subtitle')}
            </p>
          </div>

          <Controls
            t={t}
            wishes={wishes}
            onAddWish={handleAddWish}
            activeTheme={activeTheme}
            themes={PRESET_THEMES}
            onSelectTheme={setActiveTheme}
            setMagicTheme={handleMagicTheme}
            customTheme={customTheme}
          />
        </div>
      </div>

    </div>
  );
};

export default App;
