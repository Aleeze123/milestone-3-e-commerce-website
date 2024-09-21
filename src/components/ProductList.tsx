import React, { FC, useState } from 'react';
import ProductCard from './ProductCards'; 
import { Product } from '@/app/data/products'; 

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void; 
}

const ProductList: FC<ProductListProps> = ({ products, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(20); 

  // Categories
  const categories = [
    'All',
    "Men's Clothing",
    "Women's Clothing",
    "Men's Shoes",
    "Women's Shoes",
    'Jewelry',
    'Watches',
  ];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const productsToDisplay = filteredProducts.slice(0, visibleCount);

 
  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 30); // Load 30 more products
  };

  return (
    <div className="container mx-auto px-4 bg-black text-white py-8">
      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-semibold">Filter by Category:</label>
        <select
          id="category"
          className="mt-2 p-2 w-2/3 sm:w-1/3 md:w-1/4 border border-white bg-black text-white rounded"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setVisibleCount(24); 
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category} className="text-white">
              {category}
            </option>
          ))}
        </select>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {filteredProducts.length > 24 && productsToDisplay.length === visibleCount && (
        <button
          onClick={loadMore}
          className="mt-4 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductList;
