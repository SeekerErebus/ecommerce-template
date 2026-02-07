/// <reference types="astro/client" />

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface EmberCart {
  items: CartItem[];
  add(product: Omit<CartItem, 'quantity'>): void;
  remove(productId: string): void;
  updateQuantity(productId: string, quantity: number): void;
  getTotal(): number;
  getCount(): number;
  save(): void;
  notify(): void;
}

declare global {
  interface Window {
    emberCart: EmberCart;
  }
}
