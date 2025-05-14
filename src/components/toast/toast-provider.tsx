'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster

      position="top-right"
      toastOptions={{
        duration: 3000,
        style: { padding: '16px' },
        error: {
          icon: '⚠️',
          style: {
            background: '#dc2626',   // đỏ đậm (danger)
            color: '#fff',
          },
        },
      }}
    />
  );
}

