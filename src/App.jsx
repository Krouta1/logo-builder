import { useState } from "react";
import BackgroundController from "./components/BackgroundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageProvider,useUpdateStorage } from "./context/UpdateStorageContext";


function App() {
  return (
    <UpdateStorageProvider>
      <Content/>
    </UpdateStorageProvider>
  );
}

function Content () {
  const { storage, updateStorage } = useUpdateStorage();
  const {pageIndex} = storage

  return(
    <>
      <Header />
      <div className="fixed top-20 w-64">
        <SideNav/>
      </div>
      <div className="ml-64 mt-20 grid grid-cols-1 overflow-auto xl:grid-cols-6">
        <div className="h-fit xl:h-screen border p-5 shadow-sm xl:col-span-2">
          {pageIndex === 1 ? <IconController /> :  <BackgroundController />}
        </div>
        <div className="xl:col-span-3">
          <LogoPreview />
        </div>
        <div className="xl:col-span-1">
        Add
        </div>
      </div>
    </>
  )
}

export default App;
