
"use client"
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiPackage, FiDollarSign, FiFileText, FiImage, FiUser, FiMenu } from 'react-icons/fi';
import { colors } from '../../constants/colors' // تأكد من المسار الصحيح

// الألوان المحددة

const validationSchema = Yup.object({
  productName: Yup.string()
    .required('اسم المنتج مطلوب')
    .min(3, 'يجب أن يكون الاسم على الأقل 3 أحرف'),
  price: Yup.number()
    .required('السعر مطلوب')
    .min(0, 'لا يمكن أن يكون السعر أقل من الصفر'),
  description: Yup.string()
    .required('الوصف مطلوب')
    .min(20, 'الوصف يجب أن يحتوي على الأقل 20 حرفًا'),
  image: Yup.mixed()
    .required('صورة المنتج مطلوبة')
    .test('fileType', 'الملف يجب أن يكون صورة', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/webp'].includes(value.type);
    })
});

export default function ProductForm() {
  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      productName: '',
      price: '',
      description: '',
      image: null
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Data:', values);
      setIsSubmitting(false);
    }
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue('image', file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const LoadingSpinner = ({ size = 'md' }) => (
    <svg
      className={`animate-spin ${size === 'sm' ? 'h-4 w-4' : 'h-6 w-6'} text-white`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 lg:space-y-6 max-w-3xl mx-auto bg-white p-4 md:p-8 rounded-xl shadow-lg">
      {/* الهيدر المتجاوب */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-10 pb-4 border-b-2 border-gray-100">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <h1 className="text-xl md:text-2xl font-bold" style={{ color: colors.black }}>DKenish - DSh</h1>
            <p className="text-xs md:text-sm" style={{ color: colors.gray }}>منصة إدارة المنتجات</p>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="text-2xl" style={{ color: colors.blue }} />
          </button>
        </div>

        {/* قائمة المستخدم (تظهر على الجوال عند النقر) */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0`}>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <FiUser className="text-lg" style={{ color: colors.blue }} />
          </div>
          <div>
            <p className="text-sm md:text-base font-medium" style={{ color: colors.black }}>محمد دقنيش</p>
            <p className="text-xs" style={{ color: colors.gray }}>مدير النظام</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: colors.blue }}>
        إضافة منتج جديد
      </h2>

      {/* حقل اسم المنتج */}
      <div className="relative">
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
          <FiPackage className="text-lg md:text-xl" style={{ color: colors.gray }} />
          <label className="block text-sm md:text-base font-medium" style={{ color: colors.black }}>
            اسم المنتج
          </label>
        </div>
        <input
          name="productName"
          type="text"
          placeholder="أدخل اسم المنتج..."
          className={`w-full p-2 md:p-3 text-sm md:text-base border ${
            formik.touched.productName && formik.errors.productName 
              ? 'border-red-500' 
              : 'border-gray-200'
          } rounded-lg md:rounded-xl focus:ring-2 focus:ring-offset-1 md:focus:ring-offset-2 transition-all`}
          style={{
            backgroundColor: colors.white,
            color: colors.black,
            borderColor: formik.touched.productName && formik.errors.productName ? colors.red : colors.gray
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
        />
        {formik.touched.productName && formik.errors.productName && (
          <div className="text-red-500 text-xs md:text-sm mt-1 flex items-center gap-1">
            {formik.errors.productName}
          </div>
        )}
      </div>

      {/* قسم السعر والصورة */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* حقل السعر */}
        <div className="relative">
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
            <FiDollarSign className="text-lg md:text-xl" style={{ color: colors.gray }} />
            <label className="block text-sm md:text-base font-medium" style={{ color: colors.black }}>
              السعر
            </label>
          </div>
          <input
            name="price"
            type="number"
            placeholder="أدخل السعر..."
            className={`w-full p-2 md:p-3 text-sm md:text-base border ${
              formik.touched.price && formik.errors.price 
                ? 'border-red-500' 
                : 'border-gray-200'
            } rounded-lg md:rounded-xl focus:ring-2 focus:ring-offset-1 md:focus:ring-offset-2 transition-all`}
            style={{
              backgroundColor: colors.white,
              color: colors.black,
              borderColor: formik.touched.price && formik.errors.price ? colors.red : colors.gray
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <div className="text-red-500 text-xs md:text-sm mt-1">
              {formik.errors.price}
            </div>
          )}
        </div>

        {/* رفع الصورة */}
        <div className="relative">
          <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
            <FiImage className="text-lg md:text-xl" style={{ color: colors.gray }} />
            <label className="block text-sm md:text-base font-medium" style={{ color: colors.black }}>
              صورة المنتج
            </label>
          </div>
          <div className="relative group">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageInput"
              onChange={handleImageChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="imageInput"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed rounded-lg md:rounded-xl p-4 md:p-6 transition-all"
              style={{
                borderColor: colors.gray,
                backgroundColor: colors.white,
                minHeight: '120px'
              }}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Product preview"
                  className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg mb-2"
                />
              ) : (
                <FiImage className="w-8 h-8 md:w-12 md:h-12 text-gray-400 mb-2 md:mb-3" />
              )}
              <span className="text-xs md:text-sm text-center" style={{ color: colors.gray }}>
                {previewImage ? 'تغيير الصورة' : 'انقر لرفع صورة'}
              </span>
              <span className="text-2xs md:text-xs mt-1" style={{ color: colors.gray }}>
                (JPEG, PNG, WEBP)
              </span>
            </label>
          </div>
          {formik.touched.image && formik.errors.image && (
            <div className="text-red-500 text-xs md:text-sm mt-1">
              {formik.errors.image}
            </div>
          )}
        </div>
      </div>

      {/* حقل الوصف */}
      <div className="relative">
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
          <FiFileText className="text-lg md:text-xl" style={{ color: colors.gray }} />
          <label className="block text-sm md:text-base font-medium" style={{ color: colors.black }}>
            الوصف
          </label>
        </div>
        <textarea
          name="description"
          placeholder="أدخل وصف المنتج..."
          rows={3}
          className={`w-full p-2 md:p-3 text-sm md:text-base border ${
            formik.touched.description && formik.errors.description 
              ? 'border-red-500' 
              : 'border-gray-200'
          } rounded-lg md:rounded-xl focus:ring-2 focus:ring-offset-1 md:focus:ring-offset-2 transition-all`}
          style={{
            backgroundColor: colors.white,
            color: colors.black,
            borderColor: formik.touched.description && formik.errors.description ? colors.red : colors.gray
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-red-500 text-xs md:text-sm mt-1">
            {formik.errors.description}
          </div>
        )}
      </div>

      {/* زر الحفظ */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 md:py-3 px-4 md:px-6 flex items-center justify-center gap-2 text-sm md:text-base transition-all rounded-lg md:rounded-xl font-bold relative overflow-hidden group"
        style={{
          backgroundColor: colors.blue,
          color: colors.white
        }}
      >
        <span className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity" />
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" />
            جاري الحفظ...
          </>
        ) : (
          'حفظ المنتج'
        )}
      </button>
    </form>
  );
}