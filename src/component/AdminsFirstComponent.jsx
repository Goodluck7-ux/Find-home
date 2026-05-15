// components/AdminsFirstComponent.jsx
export default function AdminsFirstComponent({ title, count, icon: Icon, iconBg }) {
  return (
    <div className="bg-white p-6 rounded-[2.5rem] flex items-center gap-5 flex-1 shadow-sm border border-orange-50">
      <div className={`${iconBg} p-4 rounded-[1.25rem] flex items-center justify-center`}>
        <Icon className="text-orange-950" size={28} strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <p className="text-4xl font-bold text-slate-800 tracking-tight">{count}</p>
      </div>
    </div>
  );
}