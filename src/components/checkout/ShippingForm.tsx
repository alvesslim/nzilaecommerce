import React from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';

export default function ShippingForm() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Endereço Completo" className="col-span-2" />
      <Select options={[{value: 'luanda', label: 'Luanda'}, {value: 'benguela', label: 'Benguela'}]} />
      <Input placeholder="Código Postal" />
    </div>
  );
}
