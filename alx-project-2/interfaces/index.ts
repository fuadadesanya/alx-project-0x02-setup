// types/interfaces.ts

// Placeholder for Card component props
export interface CardProps {
  // Example props (update as needed)
  title?: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

// Placeholder for Button component props
export interface ButtonProps {
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// interfaces/index.ts

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
