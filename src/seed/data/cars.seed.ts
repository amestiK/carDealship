import { Car } from '../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'C300',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A3',
  },
];
