
export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;
  styles: string;
}
export interface CardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  features: string[];
}
export interface CardComponentProps {
  card: CardProps;
}
export interface LandingProps {
  cards: CardProps[];
}


