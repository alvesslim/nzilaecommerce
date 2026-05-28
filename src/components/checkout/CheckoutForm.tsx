import React from 'react';
import Input from '../ui/Input';

export default function CheckoutForm() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input placeholder="Nome" />
      <Input placeholder="Apelido" />
      <Input placeholder="Email" type="email" className="col-span-2" />
      <Input placeholder="Telefone" type="tel" className="col-span-2" />
    </div>
  );
}
