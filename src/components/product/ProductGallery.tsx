'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square bg-surface border border-border rounded-2xl overflow-hidden relative">
        <Image src={images[active]} alt="Produto" fill className="object-cover" />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <div key={i} onClick={() => setActive(i)} className={`w-20 h-20 bg-surface2 border-2 rounded-xl overflow-hidden cursor-pointer flex-shrink-0 ${active === i ? 'border-blue' : 'border-transparent'}`}>
            <Image src={img} alt={`Thumb ${i}`} width={80} height={80} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
