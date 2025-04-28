export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};


export const menuItems = [
  {
    id: 1,
    title: 'Classic Buffet Package',
    description: 'A traditional buffet with a selection of classic dishes including salads, entrées, and desserts.',
    pricePerPerson: 35,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Popular', 'Vegetarian options']
  },
  {
    id: 2,
    title: 'Premium Plated Service',
    description: 'Elegant plated service with gourmet appetizers, main courses, and premium desserts.',
    pricePerPerson: 55,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Premium', 'Staff included']
  },
  {
    id: 3,
    title: 'Cocktail Reception',
    description: 'Perfect for networking events with a variety of passed hors d\'oeuvres and stations.',
    pricePerPerson: 45,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Popular', 'Drink service']
  },
  {
    id: 4,
    title: 'Family Style Dining',
    description: 'Shared platters at each table promoting a communal dining experience.',
    pricePerPerson: 40,
    image: 'https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal-1024x680.jpg',
    tags: ['Kid-friendly']
  },
  {
    id: 5,
    title: 'Gourmet BBQ Package',
    description: 'Outdoor barbecue featuring premium meats, seafood, and vegetarian grill options.',
    pricePerPerson: 50,
    image: 'https://media.istockphoto.com/id/531464366/photo/beef-steaks-on-the-grill.jpg?s=612x612&w=0&k=20&c=gP5ViGnJ08YTzXthSOMKzZEMqtAbcM2jhEao09W1kAQ=',
    tags: ['Outdoor', 'Grill']
  },
  {
    id: 6,
    title: 'Brunch Buffet',
    description: 'Morning and early afternoon service featuring pastries, eggs, pancakes, and mimosas.',
    pricePerPerson: 30,
    image: 'https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/quick-pancake.webp',
    tags: ['Morning', 'Vegetarian options']
  },
  {
    id: 7,
    title: 'Seafood Extravaganza',
    description: 'A lavish spread of oysters, crab legs, shrimp cocktails, and fresh seafood entrees.',
    pricePerPerson: 70,
    image: 'https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/mango-pie.webp',
    tags: ['Luxury', 'Seafood']
  },
  {
    id: 8,
    title: 'Vegan Delight Menu',
    description: 'Plant-based dishes crafted with seasonal vegetables and international flavors.',
    pricePerPerson: 38,
    image: 'https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/jennifer-aniston-salad.webp',
    tags: ['Vegan', 'Healthy']
  }
];
