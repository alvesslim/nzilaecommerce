import React from 'react';
interface Column<T> { key: keyof T; header: string; render?: (value: T[keyof T], row: T) => React.ReactNode; }
interface TableProps<T> { columns: Column<T>[]; data: T[]; }
export default function Table<T extends Record<string, unknown>>({ columns, data }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            {columns.map(col => <th key={String(col.key)} className="text-left py-3 px-4 text-[0.85rem] text-[var(--text3)] uppercase tracking-wide font-bold">{col.header}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border)] hover:bg-[var(--surface2)] transition-colors">
              {columns.map(col => <td key={String(col.key)} className="py-4 px-4 text-[0.95rem]">{col.render ? col.render(row[col.key], row) : String(row[col.key])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
