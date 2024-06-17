import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <Header />
      <div className="fixed top-20 w-64">
        <SideNav
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
      <div className="ml-64 mt-20 grid grid-cols-1 overflow-auto xl:grid-cols-6">
        <div className="h-screen border p-5 shadow-sm xl:col-span-2">
          {selectedIndex === 1 ? <IconController /> : <BackgroundController />}
        </div>
        <div className="xl:col-span-3">
          <LogoPreview />
        </div>
        <div className="xl:col-span-1">Adds</div>
      </div>
    </UpdateStorageContext.Provider>
  );
}

export default App;
