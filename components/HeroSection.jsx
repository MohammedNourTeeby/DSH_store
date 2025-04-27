// قسم العرض الرئيسي
export default function HeroSection() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">مرحبا بكم في DSH</h1>
            <p className="py-6">أفضل الأفران بأفضل الأسعار</p>
            <button className="btn btn-primary">تصفح المنتجات</button>
          </div>
        </div>
      </div>
    );
  }