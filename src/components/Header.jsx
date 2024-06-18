import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const handleDownloadIcon = () => {
    const logoPreview = document.getElementById("logo-preview");
    html2canvas(logoPreview, { backgroundColor: null }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = `${uuidv4()}.png`;
      downloadLink.click();
    });
  };

  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border p-4 shadow-sm backdrop-blur">
      <img src="./logo.svg" alt="App logo" />
      <Button className="flex items-center gap-2" onClick={handleDownloadIcon}>
        <DownloadIcon className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
