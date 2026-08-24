import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock data focusing on modern tech and accessories
const mockData = [
  {
    id: 1,
    name: 'Quantum Noise-Cancelling Headphones',
    price: 299.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    description: 'Experience pure audio bliss with our latest quantum noise-cancelling technology.',
    featured: true
  },
  {
    id: 2,
    name: 'Nova Smartwatch Pro',
    price: 199.50,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Track your fitness, notifications, and life with the sleek Nova Pro.',
    featured: true
  },
  {
    id: 3,
    name: 'Aether Mechanical Keyboard',
    price: 149.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80',
    description: 'Tactile, responsive, and beautifully backlit for the ultimate typing experience.',
    featured: false
  },
  {
    id: 4,
    name: 'Zenith Minimalist Backpack',
    price: 89.99,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    description: 'Carry your essentials in style with this water-resistant, durable backpack.',
    featured: true
  },
  {
    id: 5,
    name: 'Lumina Desk Lamp',
    price: 59.99,
    category: 'Home Office',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    description: 'Adjustable color temperature and brightness for your perfect workspace.',
    featured: false
  },
  {
    id: 6,
    name: 'Echo Wireless Earbuds',
    price: 129.99,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    description: 'Compact, powerful, and truly wireless earbuds with deep bass.',
    featured: false
  }
];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, 800);
    });
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectAllProducts = (state) => state.products.items;
export const selectProductsLoading = (state) => state.products.loading;

export default productSlice.reducer;
