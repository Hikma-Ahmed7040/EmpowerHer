import Navbar from "./components/Navbar";
import Banners from "./components/banners/banners"; // Corrected import
// import TraditionalClothesPage from "./components/TraditionalClothes/traditionalClothes";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Banners /> 
      {/* <TraditionalClothesPage/> */}
    </div>
  );
}

export default App;
