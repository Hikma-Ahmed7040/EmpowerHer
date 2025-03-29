import Navbar from "./components/Navbar";
import { banner } from "./components/banners/banners";
// import TraditionalClothesPage from "./components/TraditionalClothes/traditionalClothes";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <banner />
      

      {/* <TraditionalClothesPage/> */}
     
    </div>
  );
}

export default App;
