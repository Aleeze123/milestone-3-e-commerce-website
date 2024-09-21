"use client";
import { Product, products } from '@/app/data/products'; 
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const router = useRouter(); 
  const [isAddedToCart, setIsAddedToCart] = useState(false); 

  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    notFound(); 
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  return (
    <div className="container mx-auto p-4">
  
      <button
        onClick={() => router.back()} 
        className="mb-4 text-blue-500 underline"
      >
        Back
      </button>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="w-full">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        
        <div className="flex flex-col justify-center bg-black p-4">
  <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">{product?.name}</h1>
  <p className="text-base md:text-lg text-gray-200 mb-2">{product?.description}</p>
  <p className="text-xl md:text-3xl font-bold text-blue-600 mt-2">${product?.price}</p>


          
          <button
            onClick={handleAddToCart}
            className={`mt-4 px-4 py-2 rounded ${
              isAddedToCart ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition duration-200`}
            disabled={isAddedToCart}
          >
            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
