import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl font-bold">Empower Women, Support Handmade Products</h1>
          <p className="text-lg mt-3">Shop authentic African traditional clothes, handmade accessories, and more.</p>
          <button className="mt-5 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B5E3C]">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Product Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-product1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-3 text-xl font-semibold">Handmade Necklace</h3>
            <p className="text-gray-600 mt-1">$25.00</p>
            <button className="mt-3 w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-product2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-3 text-xl font-semibold">Traditional Dress</h3>
            <p className="text-gray-600 mt-1">$40.00</p>
            <button className="mt-3 w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/path-to-product3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="mt-3 text-xl font-semibold">Handwoven Basket</h3>
            <p className="text-gray-600 mt-1">$30.00</p>
            <button className="mt-3 w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B5E3C] text-white py-6 mt-10 text-center">
        <p className="text-lg">&copy; 2025 EmpowerHer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;