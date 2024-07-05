export interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: Room[];
  description: string;
  image: string;
  enabled: boolean;
}

export interface Room {
  id: number;
  type: string;
  basePrice: number;
  tax: number;
  totalPrice: number;
  enabled: boolean;
}
