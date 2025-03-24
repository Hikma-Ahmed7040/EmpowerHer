import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../hero/Hero.jsx";
import TraditionalClothesPage from "../traditional_clothes/TraditionalClothes.jsx";
import bgImage from "../../assets/adisalem.jpeg"; // Adjust the path based on your project structure

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero bgImage={bgImage} />
      {/* <TraditionalClothesPage /> */}
    </div>
  );
};

export default Home;
