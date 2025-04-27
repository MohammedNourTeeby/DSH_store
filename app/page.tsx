// الصفحة الرئيسية للموقع [[10]]
"use client"
import { useState } from 'react';
import AdminDashboard from './admin/page';
import UserDashboard from './user/page';
import styles from './styles.module.css';

export default function HomePage() {
  // تحديد نوع الحالة كـ 'admin' أو 'user' أو null
  const [selectedDashboard, setSelectedDashboard] = useState<'admin' | 'user' | null>(null);

  return (
    <div>
      <header className={styles.header}>
        <nav>
          <button 
            onClick={() => setSelectedDashboard('admin')} // ✅ الآن القيمة مقبولة
            className={`${styles.navButton} ${selectedDashboard === 'admin' && styles.active}`}
          >
            لوحة المدير
          </button>
          
          <button 
            onClick={() => setSelectedDashboard('user')} // ✅ الآن القيمة مقبولة
            className={`${styles.navButton} ${selectedDashboard === 'user' && styles.active}`}
          >
            لوحة المستخدم
          </button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        {selectedDashboard === 'admin' && <AdminDashboard />}
        {selectedDashboard === 'user' && <UserDashboard />}
        
        {!selectedDashboard && (
          <div className={styles.placeholder}>
            <p>الرجاء اختيار لوحة التحكم من الأعلى</p>
          </div>
        )}
      </main>
    </div>
  );
}