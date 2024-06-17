import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Header />
      <div className="fixed w-64">
        <SideNav />
      </div>
      <div className="ml-64">Body</div>
    </>
  );
}

export default App;
