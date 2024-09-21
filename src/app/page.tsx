"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import ProductList from '@/components/ProductList';
import ShoppingCartModal from "@/components/ShoppingCard";
import { fetchProducts } from "@/app/utils/api";
import { Product } from "@/app/data/products";
import Navbar from "@/components/Navbar"; 

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); 
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

 
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar /> 
      <Banner/>
      <header className="bg-black text-white py-4 text-center">
      <h1 className="text-3xl font-bold">Welcome to Aleeza&#39;s Styles Heaven!</h1>
      <p className="mt-2 text-lg">Your gateway to exclusive offers!</p>
        <button
          className="bg-yellow-500 text-black py-2 px-4 rounded mt-4"
          onClick={() => setModalVisible(true)}
        >
          Show Cart ({cart.length}) {/* Display cart item count */}
        </button>
      </header>
      <main>
        <ProductList products={products} addToCart={addToCart} /> 
        <ShoppingCartModal
          products={cart} 
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />
      </main>
    </div>
  );
};

export default HomePage;
