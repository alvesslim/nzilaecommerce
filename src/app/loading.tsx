import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-surface2 border-t-blue rounded-full animate-spin"></div>
        <p className="text-text2 font-medium">A carregar...</p>
      </div>
    </div>
  );
}
