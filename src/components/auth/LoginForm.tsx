'use client';
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  return (
    <form className="flex flex-col gap-4">
      <Input label="Email" type="email" placeholder="seu@email.com" required />
      <Input label="Palavra-passe" type="password" placeholder="******" required />
      <Button className="mt-2" isLoading={loading} onClick={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1000); }}>Entrar</Button>
    </form>
  );
}
