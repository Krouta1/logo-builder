import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 flex h-20 w-full items-center justify-between border p-4 shadow-sm backdrop-blur z-50">
      <img src="./logo.svg" alt="App logo" />
      <Button className="flex items-center gap-2">
        <DownloadIcon className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
