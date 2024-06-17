import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between border p-4 shadow-sm">
      <img src="./logo.svg" alt="App logo" />
      <Button className="flex items-center gap-2">
        <DownloadIcon className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
