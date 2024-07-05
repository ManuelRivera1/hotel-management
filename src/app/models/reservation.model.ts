export interface Reservation {
  id: number;
  hotelId: number;
  roomId: number;
  guest: Guest;
  emergencyContact: Contact;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface Guest {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  documentType: string;
  documentNumber: string;
  email: string;
  phone: string;
}

export interface Contact {
  fullName: string;
  phone: string;
}
