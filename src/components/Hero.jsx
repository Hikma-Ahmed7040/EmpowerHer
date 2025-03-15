const Hero = () => {
    return (
      <section 
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-5xl font-bold">Empower Women, Support Handmade Products</h1>
          <p className="text-lg md:text-xl mt-3 max-w-2xl mx-auto">
            Discover authentic African traditional clothes, handmade accessories, and artisanal crafts.
          </p>
          <button className="mt-5 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500">
            Shop Now
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;