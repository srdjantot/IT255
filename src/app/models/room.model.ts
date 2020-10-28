import { Hotel } from './hotel.model';

export class Room {
    constructor(public hotel: Hotel, public description: string, public price: number, public stars: number) { }
}
