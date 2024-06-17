import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideNav selectedIndex={(value) => console.log(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2">Control Panel</div>
        <div className="md:col-span-3">Icon Preview</div>
        <div className="md:col-span-1">Adds</div>
      </div>
    </>
  );
}

export default App;
