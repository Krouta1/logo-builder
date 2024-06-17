import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideNav
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="h-screen border p-5 shadow-sm md:col-span-2">
          {selectedIndex === 1 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="md:col-span-3">Icon preview</div>
        <div className="md:col-span-1">Adds</div>
      </div>
    </>
  );
}

export default App;
