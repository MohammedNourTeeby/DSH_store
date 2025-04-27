// app/admin/page.jsx
'use client'
import { colors } from '../../constants/colors' // تأكد من المسار الصحيح
import DashboardLayout from '../../components/DashboardLayout'
import ProductForm from './ProductForm'

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="min-h-screen p-4 md:p-6" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold" style={{ color: colors.black }}>
              لوحة التحكم
              <span className="block mt-1 md:mt-2 text-sm md:text-base font-normal" style={{ color: colors.gray }}>
                إدارة المحتوى والمنتجات
              </span>
            </h1>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-8">
            <ProductForm />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}