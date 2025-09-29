export const categories = [
  {
    id: "1",
    title: "Electronics",
    description: "Latest gadgets, smartphones, laptops, and electronic accessories",
    gender: "unisex",
    code: "ELEC",
    rating: 4.5,
    image: "https://picsum.photos/seed/electronics/400/300",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "2",
    title: "Fashion & Clothing",
    description: "Trendy clothes, shoes, bags, and fashion accessories for all styles",
    gender: "unisex",
    code: "FASH",
    rating: 4.3,
    image: "https://picsum.photos/seed/fashion/400/300",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "3",
    title: "Home & Garden",
    description: "Furniture, home decor, kitchen appliances, and garden essentials",
    gender: "unisex",
    code: "HOME",
    rating: 4.2,
    image: "https://picsum.photos/seed/home/400/300",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "4",
    title: "Sports & Outdoors",
    description: "Sports equipment, outdoor gear, fitness accessories, and activewear",
    gender: "unisex",
    code: "SPORT",
    rating: 4.4,
    image: "https://picsum.photos/seed/sports/400/300",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "5",
    title: "Books & Media",
    description: "Books, magazines, movies, music, and educational materials",
    gender: "unisex",
    code: "BOOK",
    rating: 4.1,
    image: "https://picsum.photos/seed/books/400/300",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  }
];

// Helper function to get category by ID
export const getCategoryById = (id) => {
  return categories.find(category => category.id === id);
};

// Helper function to get category by code
export const getCategoryByCode = (code) => {
  return categories.find(category => category.code === code);
};

// Helper function to get all category names
export const getCategoryNames = () => {
  return categories.map(category => category.title);
};

// Helper function to get categories by gender
export const getCategoriesByGender = (gender) => {
  return categories.filter(category => category.gender === gender || category.gender === "unisex");
};