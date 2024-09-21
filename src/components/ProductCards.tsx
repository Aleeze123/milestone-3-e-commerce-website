import React, { FC } from 'react';

import { Product } from '@/app/data/products';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;

}

const ProductCard: FC<ProductCardProps> = ({ product , addToCart}) => {
 

  return (
    <div className="border p-4 rounded-md bg-gray-800 text-white">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <a 
        href={`/product/${product.id}`} 
        className="block text-center bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
        View Details
      </a>
    </div>
  );
};

export default ProductCard;
