import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [

  {
    id: '1',
    name: 'Women\'s Dress',
    price: 59.99,
    image: '/womens/d1.jpeg',
    description: 'Elegant dress for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '2',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/white.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '3',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/d2.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '4',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/black.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '5',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/imag.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '6',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/shirts.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '7',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/shirt1.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '8',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/shirt2.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  {
    id: '9',
    name: 'Women\'s Jacket',
    price: 79.99,
    image: '/womens/dress.jpeg',
    description: 'Warm and fashionable jacket for women.',
    category: 'Women\'s Clothing',
  },
  
  // Jewelry
  {
    id: '10',
    name: 'Gold Necklace',
    price: 199.99,
    image: '/jewelry/Whitenecklace.jpeg',
    description: 'Beautiful White necklace.',
    category: 'Jewelry',
  },
  {
    id: '11',
    name: 'Silver Ring',
    price: 99.99,
    image: '/jewelry/SimpleBracelet.jpeg',
    description: 'Elegant Bracelet.',
    category: 'Jewelry',
  },
  {
    id: '12',
    name: 'Diamond Earrings',
    price: 299.99,
    image: '/jewelry/gold.jpeg',
    description: 'Stunning diamond earrings.',
    category: 'Jewelry',
  },
  {
    id: '13',
    name: 'Gold Bracelet',
    price: 149.99,
    image: '/jewelry/percelbraclet.jpeg',
    description: 'Stylish gold bracelet.',
    category: 'Jewelry',
  },
  {
    id: '14',
    name: 'Pearl Necklace',
    price: 89.99,
    image: '/jewelry/ring.jpeg',
    description: 'Classic pearl necklace.',
    category: 'Jewelry',
  },
  {
    id: '15',
    name: 'Silver Bracelet',
    price: 59.99,
    image: '/jewelry/braclet.jpeg',
    description: 'Elegant silver bracelet.',
    category: 'Jewelry',
  },
  {
    id: '16',
    name: 'Ruby Ring',
    price: 179.99,
    image: '/jewelry/set.jpeg',
    description: 'Exquisite ruby ring.',
    category: 'Jewelry',
  },
  {
    id: '17',
    name: 'Emerald Pendant',
    price: 129.99,
    image: '/jewelry/pearl.jpeg',
    description: 'Gorgeous emerald pendant.',
    category: 'Jewelry',
  },
  {
    id: '18',
    name: 'Silver Anklet',
    price: 39.99,
    image: '/jewelry/zircon.jpeg',
    description: 'Chic silver anklet.',
    category: 'Jewelry',
  },
  
  // Men's Clothing
  {
    id: '19',
    name: 'Men\'s Shirt',
    price: 29.99,
    image: '/mens/green-shirt.jpeg',
    description: 'High-quality cotton shirt for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '20',
    name: 'Men\'s Jeans',
    price: 49.99,
    image: '/mens/m3.jpeg',
    description: 'Comfortable and stylish jeans for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '21',
    name: 'Men\'s Jacket',
    price: 99.99,
    image: '/mens/mr.jpeg',
    description: 'Trendy jacket for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '22',
    name: 'Men\'s Sweater',
    price: 39.99,
    image: '/mens/m5.jpeg',
    description: 'Warm and cozy sweater for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '23',
    name: 'Men\'s Shorts',
    price: 19.99,
    image: '/mens/jacket.jpeg',
    description: 'Comfortable and casual shorts for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '24',
    name: 'Men\'s Trousers',
    price: 39.99,
    image: '/mens/shirt.jpeg',
    description: 'Stylish trousers for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '25',
    name: 'Men\'s Polo Shirt',
    price: 34.99,
    image: '/mens/m4.jpeg',
    description: 'Classic polo shirt for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '26',
    name: 'Men\'s Suit',
    price: 199.99,
    image: '/mens/m1.jpeg',
    description: 'Elegant suit for men.',
    category: 'Men\'s Clothing',
  },
  {
    id: '27',
    name: 'Men\'s Blazer',
    price: 149.99,
    image: '/mens/m2.jpeg',
    description: 'Stylish blazer for men.',
    category: 'Men\'s Clothing',
  },
  
  // Watches
  {
    id: '28',
    name: 'Luxury Watch',
    price: 599.99,
    image: '/watches/watch5.jpeg',
    description: 'Luxury watch with leather band.',
    category: 'Watches',
  },
  {
    id: '29',
    name: 'Classic Watch',
    price: 199.99,
    image: '/watches/watch3.jpeg',
    description: 'Classic watch for formal occasions.',
    category: 'Watches',
  },
  {
    id: '30',
    name: 'Smart Watch',
    price: 249.99,
    image: '/watches/watch4.jpeg',
    description: 'High-tech smart watch with fitness tracking.',
    category: 'Watches',
  },
  
  {
    id: '31',
    name: 'Sport Watch',
    price: 129.99,
    image: '/watches/watch2.jpeg',
    description: 'Durable sport watch for active lifestyle.',
    category: 'Watches',
  },
  {
    id: '32',
    name: 'Fashion Watch',
    price: 89.99,
    image: '/watches/watch8.jpeg',
    description: 'Trendy fashion watch for everyday wear.',
    category: 'Watches',
  },
  {
    id: '33',
    name: 'Mechanical Watch',
    price: 349.99,
    image: '/watches/watch7.jpeg',
    description: 'Mechanical watch with automatic winding.',
    category: 'Watches',
  },
  {
    id: '34',
    name: 'Women\'s Sneakers',
    price: 49.99,
    image: '/womenshoes/shoes11.jpeg',
    description: 'Comfortable and stylish sneakers for women.',
    category: 'Women\'s Shoes',
  },
  {
    id: '35',
    name: 'Women\'s Heels',
    price: 89.99,
    image: '/womenshoes/shoes2.jpeg',
    description: 'Elegant high heels for formal occasions.',
    category: 'Women\'s Shoes',
  },
  {
    id: '36',
    name: 'Women\'s Sandals',
    price: 39.99,
    image: '/womenshoes/shoes3.jpeg',
    description: 'Casual sandals for summer.',
    category: 'Women\'s Shoes',
  },
  {
    id: '37',
    name: 'Women\'s Boots',
    price: 129.99,
    image: '/womenshoes/shoes4.jpeg',
    description: 'Stylish leather boots for women.',
    category: 'Women\'s Shoes',
  },
  {
    id: '38',
    name: 'Women\'s Boots',
    price: 129.99,
    image: '/womenshoes/shoes.jpeg',
    description: 'Stylish leather boots for women.',
    category: 'Women\'s Shoes',
  },
  {
    id: '39',
    name: 'Women\'s Boots',
    price: 129.99,
    image: '/womenshoes/shoes5.jpeg',
    description: 'Stylish leather boots for women.',
    category: 'Women\'s Shoes',
  },
  
  // Men's Shoes
  {
    id: '40',
    name: 'Men\'s Sneakers',
    price: 59.99,
    image: '/mensshoes/mshoes1.jpeg',
    description: 'Comfortable and trendy sneakers for men.',
    category: 'Men\'s Shoes',
  },
  {
    id: '41',
    name: 'Men\'s Loafers',
    price: 79.99,
    image: '/mensshoes/mshoes2.jpeg',
    description: 'Classic loafers for men.',
    category: 'Men\'s Shoes',
  },
  {
    id: '42',
    name: 'Men\'s Boots',
    price: 99.99,
    image: '/mensshoes/mshoes3.jpeg',
    description: 'Durable leather boots for men.',
    category: 'Men\'s Shoes',
  },
  {
    id: '43',
    name: 'Men\'s Sandals',
    price: 29.99,
    image: '/mensshoes/mshoes4.jpeg',
    description: 'Comfortable sandals for summer.',
    category: 'Men\'s Shoes',
  },
  {
    id: '44',
    name: 'Men\'s Formal Shoes',
    price: 119.99,
    image: '/mensshoes/mshoes5.jpeg',
    description: 'Elegant formal shoes for men.',
    category: 'Men\'s Shoes',
  },
  {
    id: '45',
    name: 'Men\'s Running Shoes',
    price: 69.99,
    image: '/mensshoes/mshoes6.jpeg',
    description: 'High-performance running shoes.',
    category: 'Men\'s Shoes',
  },

];

const ProductsPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
