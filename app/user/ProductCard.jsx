// ProductCard.jsx
import { FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {product.isNew && (
            <span className="badge bg-green-500 text-white px-3 py-1 rounded-full text-xs">
              جديد
            </span>
          )}
          {product.discount > 0 && (
            <span className="badge bg-red-500 text-white px-3 py-1 rounded-full text-xs">
              خصم {product.discount}%
            </span>
          )}
        </div>
        <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white transition">
          <FiHeart className="text-xl text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <FiStar />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-xl font-bold text-primary-600">
              {product.price} ر.س
            </p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                {product.originalPrice} ر.س
              </p>
            )}
          </div>
          <button className="btn-primary flex items-center gap-2 px-4 py-2">
            <FiShoppingCart className="text-lg" />
            إضافة للسلة
          </button>
        </div>
      </div>
    </div>
  );
}