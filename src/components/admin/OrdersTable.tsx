import React from 'react';
import Table from '../ui/Table';

export default function OrdersTable() {
  const data = [
    { id: 'WTC-1023', customer: 'João Silva', date: '2024-05-27', status: 'Entregue', total: 'AKZ 45.000' },
    { id: 'WTC-1024', customer: 'Maria Santos', date: '2024-05-27', status: 'Pendente', total: 'AKZ 12.500' },
  ];
  return (
    <Table 
      columns={[
        { key: 'id', header: 'Pedido' },
        { key: 'customer', header: 'Cliente' },
        { key: 'date', header: 'Data' },
        { key: 'status', header: 'Estado', render: (val) => <span className="bg-blue/10 text-blue px-2 py-1 rounded text-xs font-bold">{val}</span> },
        { key: 'total', header: 'Total' },
      ]}
      data={data}
    />
  );
}
