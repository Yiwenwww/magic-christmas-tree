import { Camera, Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import { useState } from "react";

const ExportButton = ({ t, targetId }) => {
    const [isExporting, setIsExporting] = useState(false);

    const handleExport = async () => {
        const element = document.getElementById('christmas-app-root'); // Specific target
        if (!element) return;

        setIsExporting(true);
        try {
            const canvas = await html2canvas(element, {
                useCORS: true,
                backgroundColor: '#000000', // Force black bg for JPEG (preserving lights/gradients)
                scale: 2, // High DPI
            });

            const image = canvas.toDataURL("image/jpeg", 0.9); // High quality JPG
            const link = document.createElement("a");
            link.href = image;
            link.download = `MerryChristmas_Card_${Date.now()}.jpg`;
            link.click();
        } catch (err) {
            console.error("Export failed", err);
            alert("Oops! Could not save the image.");
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <button
            onClick={handleExport}
            disabled={isExporting}
            className={`relative group px-4 py-2 rounded-xl font-bold transition-all flex items-center gap-2 border border-white/20
        ${isExporting
                    ? 'bg-gray-500/50 cursor-wait'
                    : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
                }`}
            title="Save as Photo"
        >
            {isExporting ? <Loader2 className="animate-spin w-4 h-4" /> : <Camera className="w-4 h-4 text-pink-300" />}
            <span className="hidden md:inline text-sm">{t ? t('btn_save') : 'Save'}</span>
        </button>
    );
};

export default ExportButton;
