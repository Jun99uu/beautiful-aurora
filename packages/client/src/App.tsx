import Canvas from "./components/Canvas";
import Header from "./components/Header";
import MainSection from "./components/Sections";
import SizeHeader from "./components/SizeHeader";

function App() {
  return (
    <div className="container">
      <Header />
      <SizeHeader />
      <Canvas />
      <MainSection />
    </div>
  );
}

export default App;
