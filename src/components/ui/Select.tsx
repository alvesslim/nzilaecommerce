import React from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label?: string; options: { value: string; label: string }[]; }
export default function Select({ label, options, className = '', ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-[0.85rem] font-bold text-[var(--text3)] uppercase tracking-wide">{label}</label>}
      <select className={`bg-[var(--surface2)] border border-[var(--border)] text-[var(--text)] py-3 px-4 rounded-xl outline-none cursor-pointer focus:border-[var(--blue)] ${className}`} {...props}>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
