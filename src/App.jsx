import Navbar from "./components/Navbar/Navbar";
import TraditionalClothesPage from "./components/traditional_clothes/TraditionalClothes.jsx";
import Home from "./components/home/Home";


function App() {
  return (
    <div>
      <Navbar />
      {/* <TraditionalClothesPage/> */}
      <Home />
      {/* Other content */}
      <TraditionalClothesPage />
    </div>
  );
}

export default App;
