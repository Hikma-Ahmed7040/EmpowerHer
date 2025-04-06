import Navbar from "./components/Navbar";
import Banners from "./components/banners/banners"; // Corrected import
// import TraditionalClothesPage from "./components/TraditionalClothes/traditionalClothes";
import Home from "./components/Home";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <Banners /> 
      <ProductDetails />
      {/* <TraditionalClothesPage/> */}
    </div>
  );
}

export default App;
