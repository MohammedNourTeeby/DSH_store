// ProductList.jsx
import ProductCard from './ProductCard';
import { FiSearch } from 'react-icons/fi';

// بيانات وهمية موسعة
const dummyProducts = [
  {
    id: 1,
    name: 'فرن غاز حديث',
    price: 1599,
    originalPrice: 1999,
    discount: 20,
    rating: 4.5,
    description: 'فرن غاز بمواصفات عالية مع شواية كهربائية وفرن ذاتي التنظيف',
    imageUrl: 'https://picsum.photos/300/300?random=1',
    isNew: true,
    stock: 5
  },
  {
    id: 2,
    name: 'ثلاجة سامسونج',
    price: 3499,
    rating: 4.8,
    description: 'ثلاجة双门 بموفرة للطاقة مع تقنية No Frost',
    imageUrl: 'https://picsum.photos/300/300?random=2',
    stock: 10
  },
  {
    id: 3,
    name: 'غسالة اتوماتيك',
    price: 2299,
    originalPrice: 2599,
    discount: 12,
    rating: 4.2,
    description: 'سعة 8 كجم مع تقنية الحماية من التسرب وتنظيف بالبخار',
    imageUrl: 'https://picsum.photos/300/300?random=3',
    stock: 3
  },
  // يمكن إضافة المزيد من المنتجات
];

export default function ProductList() {
  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          <button className="filter-btn active">الكل</button>
          <button className="filter-btn">العروض</button>
          <button className="filter-btn">الأحدث</button>
          <button className="filter-btn">الأكثر مبيعاً</button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4].map(page => (
          <button 
            key={page}
            className={`pagination-btn ${page === 1 ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}