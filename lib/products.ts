export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Audio",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Premium sound quality"],
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Wearables",
    description: "Advanced smartwatch with health monitoring and GPS tracking.",
    features: ["Heart rate monitor", "GPS tracking", "Water resistant", "7-day battery"],
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Laptop Pro 15",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    category: "Computers",
    description: "Powerful laptop with latest processor and stunning display.",
    features: ["Intel i7 processor", "16GB RAM", "512GB SSD", "15.6 inch display"],
    inStock: true,
    rating: 4.9
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    category: "Audio",
    description: "True wireless earbuds with premium sound and comfortable fit.",
    features: ["True wireless", "24-hour total battery", "Touch controls", "IPX5 water resistant"],
    inStock: true,
    rating: 4.6
  },
  {
    id: 5,
    name: "4K Ultra HD Camera",
    price: 599.99,
    originalPrice: 749.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
    category: "Cameras",
    description: "Professional-grade camera with 4K video recording.",
    features: ["4K video", "24MP sensor", "Optical stabilization", "Wi-Fi connectivity"],
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "Gaming Console Pro",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop",
    category: "Gaming",
    description: "Next-gen gaming console with stunning graphics.",
    features: ["4K gaming", "1TB storage", "Wireless controller", "Online gaming"],
    inStock: true,
    rating: 4.9
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    category: "Audio",
    description: "Portable Bluetooth speaker with powerful bass.",
    features: ["360° sound", "12-hour battery", "Waterproof", "Built-in microphone"],
    inStock: true,
    rating: 4.5
  },
  {
    id: 8,
    name: "Tablet Pro 12",
    price: 799.99,
    originalPrice: 899.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    category: "Tablets",
    description: "Premium tablet with stunning display and powerful performance.",
    features: ["12-inch display", "A15 chip", "Face ID", "All-day battery"],
    inStock: true,
    rating: 4.7
  }
];

export const categories = ["All", "Audio", "Wearables", "Computers", "Cameras", "Gaming", "Tablets"];
