import React, { useState } from 'react';
import './traditionalClothes.css';
import ProductCard from './ProductCard'; // Import the ProductCard component

const countryProducts = {
  Ethiopia: {
    'Amhara and Tigray': [
      {
        id: 1,
        name: 'Habesha Kemis',
        price: 59.99,
        sizes: ['S', 'M', 'L'],
        description: 'A classic Ethiopian traditional dress for women.',
        image: 'https://i.pinimg.com/originals/e2/c2/7a/e2c27a6be07ce2b4d3c5c6919ca09bdf.jpg',
      },
      {
        id: 2,
        name: 'Netela Shawl',
        price: 29.99,
        sizes: ['One Size'],
        description: 'A traditional Ethiopian shawl with intricate embroidery.',
        image: 'https://example.com/netela-shawl.jpg',
      },
      {
        id: 3,
        name: 'Gabi Wrap',
        price: 39.99,
        sizes: ['One Size'],
        description: 'A thick, warm wrap worn by both men and women.',
        image: 'https://example.com/gabi-wrap.jpg',
      },
    ],
    'Oromo and Other Groups': [
      {
        id: 4,
        name: 'Oromo Shamma',
        price: 39.99,
        sizes: ['S', 'M', 'L'],
        description: 'A traditional Oromo wrap for both men and women.',
        image: 'https://example.com/oromo-shamma.jpg',
      },
      {
        id: 5,
        name: 'Oromo Beaded Necklace',
        price: 19.99,
        sizes: ['One Size'],
        description: 'A handcrafted beaded necklace from the Oromo culture.',
        image: 'https://example.com/oromo-necklace.jpg',
      },
    ],
    'Gurage Ethnic Group': [
      {
        id: 6,
        name: 'Kuta Dress',
        price: 49.99,
        sizes: ['S', 'M', 'L'],
        description: 'A vibrant traditional dress from the Gurage people.',
        image: 'https://example.com/kuta-dress.jpg',
      },
    ],
    'Afar Ethnic Group': [
      {
        id: 7,
        name: 'Baro Dress',
        price: 54.99,
        sizes: ['S', 'M', 'L'],
        description: 'A colorful dress worn by Afar women.',
        image: 'https://example.com/baro-dress.jpg',
      },
      {
        id: 8,
        name: 'Sari Shawl',
        price: 24.99,
        sizes: ['One Size'],
        description: 'A lightweight shawl worn by Afar women.',
        image: 'https://example.com/sari-shawl.jpg',
      },
    ],
    'Hamer and Karo Ethnic Groups': [
      {
        id: 9,
        name: 'Leather Skirt',
        price: 69.99,
        sizes: ['S', 'M', 'L'],
        description: 'A traditional leather skirt adorned with beads.',
        image: 'https://example.com/leather-skirt.jpg',
      },
      {
        id: 10,
        name: 'Leather Cape',
        price: 79.99,
        sizes: ['One Size'],
        description: 'A handcrafted leather cape with intricate designs.',
        image: 'https://example.com/leather-cape.jpg',
      },
    ],
    'Somali Ethnic Group': [
      {
        id: 11,
        name: 'Jano Dress',
        price: 49.99,
        sizes: ['S', 'M', 'L'],
        description: 'A flowing dress worn by Somali women.',
        image: 'https://example.com/jano-dress.jpg',
      },
      {
        id: 12,
        name: 'Hijab',
        price: 19.99,
        sizes: ['One Size'],
        description: 'A traditional headscarf worn by Somali women.',
        image: 'https://example.com/somali-hijab.jpg',
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
    if (expandedEthnicGroup === `${country}-${ethnicGroup}`) {
      setExpandedEthnicGroup(null); // Collapse the group
    } else {
      setExpandedEthnicGroup(`${country}-${ethnicGroup}`); // Expand the group
    }
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