import React, { useState } from 'react';
import './traditionalClothes.css';
import ProductCard from './ProductCard'; // Import the ProductCard component

const countryProducts = {
  Ethiopia: {
    Amhara: [
      {
        id: 1,
        name: 'Habesha Kemis Rahel Getu',
        price: 59.99,
        sizes: ['S', 'M', 'L'],
        description: 'Showcase the beauty of Ethiopian culture with this exquisite traditional dress.',
        image: 'https://ethiopianclothing.net/cdn/shop/products/il_gfh1140xN_2048x.jpg?v=1680533251',
      },
      {
        id: 2,
        name: 'Habesha Kemis',
        price: 59.99,
        sizes: ['S', 'M', 'L'],
        description: 'A classic Ethiopian traditional dress for women.',
        image: 'https://i.pinimg.com/originals/e2/c2/7a/e2c27a6be07ce2b4d3c5c6919ca09bdf.jpg',
      },
      {
        id: 3,
        name: 'Habesha Kemis Selam Tesfaye',
        price: 59.99,
        sizes: ['S', 'M', 'L'],
        description: 'A vibrant Ethiopian traditional dress.',
        image: 'https://th.bing.com/th/id/R.0b62c754fc7c06bde8ae3bef0afa37aa?rik=WNLZXUb3YqdEOw&pid=ImgRaw&r=0',
      },
      {
        id: 4,
        name: 'Netela Shawl',
        price: 29.99,
        sizes: ['One Size'],
        description: 'A traditional Ethiopian shawl with intricate embroidery.',
        image: 'https://example.com/netela-shawl.jpg',
      },
    ],
    Tigray: [
      {
        id: 5,
        name: 'Tigrayan Dress',
        price: 49.99,
        sizes: ['S', 'M', 'L'],
        description: 'A traditional Tigrayan dress with unique patterns.',
        image: 'https://example.com/tigrayan-dress.jpg',
      },
      {
        id: 6,
        name: 'Tigrayan Shawl',
        price: 34.99,
        sizes: ['One Size'],
        description: 'A beautiful shawl from the Tigray region.',
        image: 'https://example.com/tigrayan-shawl.jpg',
      },
    ],
    Oromo: [
      {
        id: 7,
        name: 'Oromo Shamma',
        price: 39.99,
        sizes: ['S', 'M', 'L'],
        description: 'A traditional Oromo wrap for both men and women.',
        image: 'https://example.com/oromo-shamma.jpg',
      },
      {
        id: 8,
        name: 'Oromo Beaded Necklace',
        price: 19.99,
        sizes: ['One Size'],
        description: 'A handcrafted beaded necklace from the Oromo culture.',
        image: 'https://example.com/oromo-necklace.jpg',
      },
    ],
  },
  Ghana: {
    Ashanti: [
      {
        id: 9,
        name: 'Kente Dress',
        price: 49.99,
        sizes: ['S', 'M', 'L'],
        description: 'A stunning Kente dress that celebrates Ghanaian heritage.',
        image: 'https://example.com/kente-dress.jpg',
      },
    ],
    Ewe: [
      {
        id: 10,
        name: 'Ewe Kente Cloth',
        price: 54.99,
        sizes: ['M', 'L', 'XL'],
        description: 'A stylish Kente shirt perfect for cultural events.',
        image: 'https://example.com/kente-shirt.jpg',
      },
    ],
  },
  // Add more countries and ethnic groups as needed
};

const TraditionalClothesPage = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [expandedEthnicGroup, setExpandedEthnicGroup] = useState(null);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleExploreMore = (country, ethnicGroup) => {
    setExpandedEthnicGroup(`${country}-${ethnicGroup}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Traditional Clothes</h1>

      {/* Render sections for each country */}
      {Object.entries(countryProducts).map(([country, ethnicGroups]) => (
        <section key={country} className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">{country}</h2>

          {/* Render sections for each ethnic group */}
          {Object.entries(ethnicGroups).map(([ethnicGroup, products]) => (
            <div key={ethnicGroup} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{ethnicGroup} Traditional Clothes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {products
                  .slice(0, expandedEthnicGroup === `${country}-${ethnicGroup}` ? products.length : 3)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      selectedSize={selectedSize}
                      handleSizeChange={handleSizeChange}
                    />
                  ))}
              </div>

              {/* Show "Explore More" button if there are more than 3 products */}
              {products.length > 3 && (
                <div className="text-center mt-6">
                  <button
                    onClick={() => handleExploreMore(country, ethnicGroup)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                  >
                    {expandedEthnicGroup === `${country}-${ethnicGroup}` ? 'Show Less' : 'Explore More'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default TraditionalClothesPage;