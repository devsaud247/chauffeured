export type RentalType =
  | 'Party bus'
  | 'shuttle'
  | 'Limeousine'
  | 'SUV'
  | 'Sedan';

export type Rental = {
  id: number;
  title: string;
  images: string[];
  isNew: boolean;
  rentPerHour: number;
  rentPerMile: number;
  type: RentalType;
  size: number;
  allowsSmoking: boolean;
};
