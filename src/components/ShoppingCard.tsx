import { FC } from "react";
import { Product } from "@/app/data/products";

interface ShoppingCartModalProps {
  products: Product[];
  isVisible: boolean;
  onClose: () => void;
}

const ShoppingCartModal: FC<ShoppingCartModalProps> = ({ products, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-black p-4 rounded w-96">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        {products.length > 0 ? (
          <ul className="mt-4">
            {products.map((product, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{product.name}</span>
                <span>${product.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4">Your cart is empty.</p>
        )}
        <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
