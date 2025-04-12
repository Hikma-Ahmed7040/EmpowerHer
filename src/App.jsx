import Banners from "./components/banners/banners"; // Corrected import
import Header from "./components/Header/Header";
// import TraditionalClothesPage from "./components/TraditionalClothes/traditionalClothes";
import Home from "./components/Home";
import ProductDetails from "./pages/productDetails";
import '@fontsource/playfair-display/400.css'; // Regular weight
import '@fontsource/playfair-display/700.css'; // Bold weight
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      
      <Header />
      <Home />
      <Banners /> 
      <ProductDetails />
      {/* <TraditionalClothesPage/> */}
      <Footer />
    </div>
  );
}

export default App;
