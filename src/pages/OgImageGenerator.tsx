import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const OgImageGenerator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerated, setIsGenerated] = useState(false);

  const generateImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsLoading(true);
    setIsGenerated(false);

    try {
      // Load background image
      const bgImage = new Image();
      bgImage.crossOrigin = "anonymous";
      
      await new Promise<void>((resolve, reject) => {
        bgImage.onload = () => resolve();
        bgImage.onerror = reject;
        bgImage.src = "/src/assets/lieu-hero.png";
      });

      // Draw background image (cover the canvas)
      const scale = Math.max(OG_WIDTH / bgImage.width, OG_HEIGHT / bgImage.height);
      const x = (OG_WIDTH - bgImage.width * scale) / 2;
      const y = (OG_HEIGHT - bgImage.height * scale) / 2;
      ctx.drawImage(bgImage, x, y, bgImage.width * scale, bgImage.height * scale);

      // Add dark overlay for better contrast
      ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
      ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);

      // Load logo
      const logo = new Image();
      logo.crossOrigin = "anonymous";
      
      await new Promise<void>((resolve, reject) => {
        logo.onload = () => resolve();
        logo.onerror = reject;
        logo.src = "/logo-og.jpg";
      });

      // Draw logo centered
      const logoMaxWidth = 400;
      const logoMaxHeight = 250;
      const logoScale = Math.min(logoMaxWidth / logo.width, logoMaxHeight / logo.height);
      const logoWidth = logo.width * logoScale;
      const logoHeight = logo.height * logoScale;
      const logoX = (OG_WIDTH - logoWidth) / 2;
      const logoY = (OG_HEIGHT - logoHeight) / 2 - 40;
      
      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

      // Add text "Club Santé & Bien-être"
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "600 32px 'Instrument Sans', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Club Santé & Bien-être", OG_WIDTH / 2, logoY + logoHeight + 50);

      // Add location text
      ctx.font = "400 26px 'Instrument Sans', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
      ctx.fillText("Château-Thierry • Aisne", OG_WIDTH / 2, logoY + logoHeight + 90);

      setIsGenerated(true);
      toast.success("Image OpenGraph générée !");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Erreur lors de la génération de l'image");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "og-image.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
    toast.success("Image téléchargée ! Placez-la dans public/og-image.jpg");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          Générateur d'image OpenGraph
        </h1>
        <p className="text-muted-foreground mb-8">
          Cette image sera affichée lors du partage du site sur les réseaux sociaux (1200 × 630 pixels)
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <canvas
            ref={canvasRef}
            width={OG_WIDTH}
            height={OG_HEIGHT}
            className="w-full max-w-full h-auto rounded-lg shadow-lg"
            style={{ aspectRatio: `${OG_WIDTH}/${OG_HEIGHT}` }}
          />
        </div>

        <div className="flex gap-4">
          <Button
            onClick={generateImage}
            variant="outline"
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            Régénérer
          </Button>
          <Button
            onClick={downloadImage}
            disabled={!isGenerated || isLoading}
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger (JPG)
          </Button>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">Instructions :</h3>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1 text-sm">
            <li>Cliquez sur "Télécharger (JPG)" pour obtenir l'image</li>
            <li>Renommez le fichier en <code className="bg-muted px-1 rounded">og-image.jpg</code></li>
            <li>Placez-le dans le dossier <code className="bg-muted px-1 rounded">public/</code> du projet</li>
            <li>L'image sera automatiquement utilisée pour les partages sur les réseaux sociaux</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OgImageGenerator;
