// pages/api/products/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../app/data/products'; // Adjust this path to where your products data is stored

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  // Check if id is a string
  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  const productId = Number(id); // Convert ID to number

  // Find product by ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return res.status(200).json(product);
};

export default handler;
