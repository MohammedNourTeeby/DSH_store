// قسم المميزات
export default function FeaturesSection() {
    return (
      <div className="py-20 bg-base-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">مميزاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon="🔥" title="جودة عالية" />
            <FeatureCard icon="⚡" title="شحن سريع" />
            <FeatureCard icon="🛡️" title="ضمان 5 سنوات" />
          </div>
        </div>
      </div>
    );
  }
  
  function FeatureCard({ icon, title }) {
    return (
      <div className="card bg-base-200 p-6">
        <span className="text-4xl mb-4">{icon}</span>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    );
  }