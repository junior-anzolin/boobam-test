import { Product } from "./product.dto";
import { Section } from "./section.dto";

export const productsBoobam: Product[] = [
  {
    name: "Alto-Falante SONOS MOVE",
    author: "SONOS",
    amount: "R$ 6.470,63",
    image: "https://i.ibb.co/f2c8jWm/product1.jpg",
  },
  {
    name: "Alto-Falante SONOS FIVE",
    author: "SONOS",
    amount: "R$ 9.132,83",
    image: "https://i.ibb.co/8xw5LKz/product2.jpg",
  },
  {
    name: "Alto-Falante SONOS ROAM",
    author: "SONOS",
    amount: "R$ 2.908,70",
    image: "https://i.ibb.co/yhRFB0p/product3.jpg",
  },
];
export const productsArtist: Product[] = [
  {
    name: "Cadeira Henri",
    author: "Paolas Vilas",
    amount: "R$ 4.400,00",
    image: "https://i.ibb.co/PxvCGNB/product9.png",
  },
  {
    name: "Mesa Seios",
    author: "Paolas Vilas",
    amount: "R$ 1.290,00",
    image: "https://i.ibb.co/PWtn7Yf/product8.png",
  },
  {
    name: "Luminária de Mesa Octavia",
    author: "Paolas Vilas",
    amount: "R$ 2.400,00",
    image: "https://i.ibb.co/qkx0BTh/product7.png",
  },
  {
    name: "Mamilos de Parede",
    author: "Paolas Vilas",
    amount: "R$ 1.955,0",
    image: "https://i.ibb.co/4PY45LM/product6.png",
    pro: true,
  },
  {
    name: "Castiçal Henri",
    author: "Paolas Vilas",
    amount: "R$ 1.700,00",
    image: "https://i.ibb.co/9n2skzf/product5.png",
  },
  {
    name: "Tábuas Seios",
    author: "Paolas Vilas",
    amount: "R$ 620,00",
    image: "https://i.ibb.co/Bqv9VDN/product4.png",
  },
];

export const sections: Section[] = [
  {
    carouselName: "Torrinha",
    title: "Banco Torrinha",
    author: "Boobam Lab",
    image: "https://i.ibb.co/BjXT1Kr/header.jpg",
    typeView: "carousel",
    products: productsBoobam,
  },
  {
    title: "Paolas Vilas",
    image: "https://i.ibb.co/T85LBHX/paola-vilas.jpg",
    typeView: "artist",
    products: productsArtist,
  },
];
