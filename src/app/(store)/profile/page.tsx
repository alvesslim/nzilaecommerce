'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Package, 
  Heart, 
  MapPin, 
  SignOut,
  CaretRight
} from '@phosphor-icons/react';
import { ROUTES } from '@/constants/routes';

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app we'd clear auth tokens here
    router.push(ROUTES.HOME);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-[calc(72px+3rem)] pb-16 max-sm:px-4 max-sm:pt-[calc(72px+2rem)]">
      
      <div className="flex items-center gap-6 mb-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <div className="w-24 h-24 bg-surface2 border border-border rounded-full flex items-center justify-center text-[2.5rem] text-text3 flex-shrink-0">
          <User weight="regular" />
        </div>
        <div>
          <h1 className="font-heading text-[2.2rem] font-extrabold mb-1">João Silva</h1>
          <p className="text-text2">joao.silva@email.com &middot; Cliente desde Mai 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-[280px_1fr] gap-12 max-lg:grid-cols-1">
        
        {/* Sidebar */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden h-fit">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 p-5 border-b border-border bg-blue/5 text-blue font-semibold cursor-pointer transition-colors hover:bg-blue/10">
              <User weight="regular" className="text-xl" /> Perfil
              <CaretRight weight="bold" className="ml-auto opacity-50" />
            </div>
            <div className="flex items-center gap-3 p-5 border-b border-border text-text2 cursor-pointer transition-colors hover:bg-surface2 hover:text-text">
              <Package weight="regular" className="text-xl" /> Os meus Pedidos
              <span className="ml-auto bg-surface3 text-text text-[0.7rem] px-2 py-0.5 rounded-full font-bold">2</span>
            </div>
            <div className="flex items-center gap-3 p-5 border-b border-border text-text2 cursor-pointer transition-colors hover:bg-surface2 hover:text-text">
              <Heart weight="regular" className="text-xl" /> Favoritos
            </div>
            <div className="flex items-center gap-3 p-5 border-b border-border text-text2 cursor-pointer transition-colors hover:bg-surface2 hover:text-text">
              <MapPin weight="regular" className="text-xl" /> Moradas
            </div>
            <div 
              className="flex items-center gap-3 p-5 text-[#E11D48] cursor-pointer transition-colors hover:bg-[#E11D48]/5"
              onClick={handleLogout}
            >
              <SignOut weight="regular" className="text-xl" /> Sair
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-heading text-[1.5rem] font-bold mb-6">Informações Pessoais</h2>
          
          <div className="bg-surface border border-border rounded-2xl p-8 mb-8 max-sm:p-6">
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">Nome Completo</label>
                <input type="text" defaultValue="João Silva" className="bg-surface2 border border-border text-text py-3 px-4 rounded-xl font-inter outline-none focus:border-blue" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">Email</label>
                <input type="email" defaultValue="joao.silva@email.com" className="bg-surface2 border border-border text-text py-3 px-4 rounded-xl font-inter outline-none focus:border-blue" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold text-text3 uppercase tracking-wide">Telefone</label>
                <input type="tel" defaultValue="+244 923 000 000" className="bg-surface2 border border-border text-text py-3 px-4 rounded-xl font-inter outline-none focus:border-blue" />
              </div>
            </div>
            <div className="mt-8">
              <button className="py-3 px-6 bg-blue text-white border-none rounded-xl font-semibold cursor-pointer hover:bg-blue-dark">
                Guardar Alterações
              </button>
            </div>
          </div>

          <h2 className="font-heading text-[1.5rem] font-bold mb-6">Pedidos Recentes</h2>
          <div className="flex flex-col gap-4">
            
            {/* Order Item */}
            <div className="bg-surface border border-border rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4 max-sm:flex-col max-sm:gap-2">
                <div>
                  <div className="font-bold text-lg">Pedido #WTC-2094</div>
                  <div className="text-[0.9rem] text-text3">12 de Maio, 2024 &middot; 2 itens</div>
                </div>
                <div className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-lg text-[0.85rem] border border-accent/20">
                  Entregue
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-surface2 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://www.wantelcom.com/storage/ficheiros/KAcnDENwA1sjJyEeWqBxlSVI5MoRwZ835fqxA2H6.jpg" alt="Item" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[0.95rem]">SUZUKI GRAND VITARA 1.5L</div>
                  <div className="text-[0.85rem] text-text2">AKZ 34.492.500</div>
                </div>
              </div>
              <div className="flex justify-end gap-3 border-t border-border pt-4">
                <button className="py-2 px-4 bg-transparent border border-border text-text rounded-lg text-[0.9rem] font-semibold cursor-pointer hover:bg-surface2">
                  Ver Fatura
                </button>
                <button className="py-2 px-4 bg-blue/10 border border-transparent text-blue rounded-lg text-[0.9rem] font-semibold cursor-pointer hover:bg-blue/20">
                  Comprar Novamente
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
