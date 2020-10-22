export class Room {
  hotel: string;
  description: string;
  price: number;
  stars: number;

  constructor(hotel: string, description: string, price: number, stars: number) {
    this.hotel = hotel;
    this.description = description;
    this.price = price;
    this.stars = stars;
  }
}
