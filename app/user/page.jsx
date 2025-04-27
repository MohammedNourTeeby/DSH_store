// UserDashboard.jsx
import ProductList from './ProductList';

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          اكتشف أحدث المنتجات
          <span className="block mt-2 text-lg font-normal text-gray-600">
            اختر من بين أفضل الأجهزة المنزلية
          </span>
        </h1>
        
        <ProductList />
      </div>
    </div>
  );
}