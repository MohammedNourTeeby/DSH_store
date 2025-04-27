// تصميم لوحة التحكم مع شريط جانبي [[5]]

export default function DashboardLayout({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex-1 p-6">{children}</div>
      </div> 
      
    </div>
  );
}