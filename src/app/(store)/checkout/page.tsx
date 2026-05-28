'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  MapPin, 
  CreditCard, 
  LockKey 
} from '@phosphor-icons/react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/useToast';
import { ROUTES } from '@/constants/routes';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const { showToast } = useToast();
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const formatCurrency = (val: number) => {
    return `AKZ ${val.toLocaleString('pt-AO')}`;
  };

  const handleCompleteOrder = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-[72px]">
        <CheckCircle weight="fill" className="text-[5rem] text-accent mb-6" />
        <h1 className="text-[2.5rem] font-heading font-extrabold mb-4">Pedido Confirmado!</h1>
        <p className="text-text2 mb-8 max-w-[500px] text-[1.1rem]">
          Obrigado pela sua compra. O seu pedido #WTC-{Math.floor(1000 + Math.random() * 9000)} foi recebido e está a ser processado. Receberá um email com os detalhes.
        </p>
        <Link href={ROUTES.SHOP} className="btn-hero primary">
          Continuar a Comprar
        </Link>
      </div>
    );
  }

  // If cart is empty and not success
  if (cart.items.length === 0 && !success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 pt-[72px]">
        <h2 className="text-[2rem] font-heading font-bold mb-4">Carrinho Vazio</h2>
        <p className="text-text2 mb-8">Adicione produtos ao carrinho antes de finalizar a compra.</p>
        <button onClick={() => router.push(ROUTES.SHOP)} className="btn-hero primary">Voltar à Loja</button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1fr_400px] gap-12 max-w-[1200px] mx-auto px-8 pt-[calc(72px+3rem)] pb-16 max-lg:grid-cols-1 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      {/* Checkout Steps */}
      <div>
        <h2 className="font-heading text-[2rem] font-extrabold mb-8">Finalizar Compra</h2>
        
        {/* Step 1: Shipping */}
        <div className={`bg-surface border border-border rounded-2xl p-8 mb-6 transition-all ${step === 1 ? 'shadow-lg border-blue ring-1 ring-blue/20' : 'opacity-70'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue text-white' : 'bg-surface2 text-text3'}`}>1</div>
            <h3 className="font-heading text-[1.3rem] font-bold">Endereço de Entrega</h3>
          </div>
          
          {step === 1 ? (
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <input type="text" placeholder="Primeiro Nome" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue" />
              <input type="text" placeholder="Apelido" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue" />
              <input type="email" placeholder="Email" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue col-span-2 max-sm:col-span-1" />
              <input type="tel" placeholder="Telefone" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue col-span-2 max-sm:col-span-1" />
              <input type="text" placeholder="Endereço Completo" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue col-span-2 max-sm:col-span-1" />
              <select className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue">
                <option>Luanda</option>
                <option>Benguela</option>
                <option>Huíla</option>
              </select>
              <input type="text" placeholder="Código Postal" className="bg-surface2 border border-border text-text p-3.5 rounded-xl font-inter outline-none focus:border-blue" />
              
              <button 
                className="col-span-2 py-4 bg-blue text-white border-none rounded-xl font-semibold cursor-pointer mt-4 hover:bg-blue-dark max-sm:col-span-1"
                onClick={() => setStep(2)}
              >
                Continuar para Pagamento
              </button>
            </div>
          ) : (
            <div className="text-text2 text-[0.95rem] pl-11 flex justify-between items-center">
              <div>
                João Silva<br/>
                Luanda, Angola<br/>
                +244 923 000 000
              </div>
              <button className="text-blue-light font-medium bg-transparent border-none cursor-pointer" onClick={() => setStep(1)}>Editar</button>
            </div>
          )}
        </div>

        {/* Step 2: Payment */}
        <div className={`bg-surface border border-border rounded-2xl p-8 transition-all ${step === 2 ? 'shadow-lg border-blue ring-1 ring-blue/20' : 'opacity-70'}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue text-white' : 'bg-surface2 text-text3'}`}>2</div>
            <h3 className="font-heading text-[1.3rem] font-bold">Método de Pagamento</h3>
          </div>
          
          {step === 2 && (
            <div>
              <div className="flex flex-col gap-3 mb-6">
                <label className="flex items-center gap-4 p-4 border border-blue bg-blue/5 rounded-xl cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="accent-blue w-4 h-4" />
                  <div className="flex-1">
                    <div className="font-bold">Multicaixa Express / Referência</div>
                    <div className="text-[0.85rem] text-text2">Pagamento rápido e seguro em KZ</div>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 border border-border bg-surface rounded-xl cursor-pointer hover:border-blue/50">
                  <input type="radio" name="payment" className="accent-blue w-4 h-4" />
                  <div className="flex-1">
                    <div className="font-bold">Transferência Bancária</div>
                    <div className="text-[0.85rem] text-text2">BAI, BFA, BIC, Atlântico</div>
                  </div>
                </label>
                <label className="flex items-center gap-4 p-4 border border-border bg-surface rounded-xl cursor-pointer hover:border-blue/50">
                  <input type="radio" name="payment" className="accent-blue w-4 h-4" />
                  <div className="flex-1">
                    <div className="font-bold">Cartão de Crédito/Débito</div>
                    <div className="text-[0.85rem] text-text2">Visa, Mastercard</div>
                  </div>
                </label>
              </div>
              
              <div className="text-[0.85rem] text-text3 flex items-center gap-2 mb-6">
                <LockKey weight="fill" /> A sua transação é segura e encriptada.
              </div>
              
              <button 
                className="w-full py-4 bg-blue text-white border-none rounded-xl text-[1.05rem] font-semibold cursor-pointer flex justify-center items-center gap-2 hover:bg-blue-dark disabled:opacity-50"
                onClick={handleCompleteOrder}
                disabled={loading}
              >
                {loading ? 'A processar...' : 'Confirmar Pagamento'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="bg-surface border border-border rounded-2xl p-8 h-fit sticky top-[100px]">
        <h3 className="font-heading text-[1.3rem] font-bold mb-6">Resumo ({cart.totalItems} itens)</h3>
        
        <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
          {cart.items.map(item => (
            <div key={item.product.id} className="flex gap-4 items-center">
              <div className="w-[60px] h-[60px] bg-surface2 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-[0.95rem] truncate">{item.product.name}</div>
                <div className="text-[0.85rem] text-text2">Qtd: {item.quantity}</div>
              </div>
              <div className="font-bold text-[0.95rem] whitespace-nowrap">
                {formatCurrency(item.product.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-4">
          <div className="flex justify-between text-[0.95rem] py-2 text-text2">
            <span>Subtotal</span>
            <span className="text-text font-medium">{formatCurrency(cart.subtotal)}</span>
          </div>
          <div className="flex justify-between text-[0.95rem] py-2 text-text2">
            <span>Entrega</span>
            <span className="text-accent font-medium">{cart.shipping === 0 ? 'Grátis' : formatCurrency(cart.shipping)}</span>
          </div>
          <div className="flex justify-between text-[1.2rem] py-4 mt-2 border-t border-border font-heading font-extrabold text-text">
            <span>Total a Pagar</span>
            <span className="text-blue-light">{formatCurrency(cart.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
