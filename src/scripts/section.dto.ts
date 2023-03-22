import { Product } from "./product.dto";

export type TypeView = "carousel" | "artist";

export interface Section {
  title: string;
  image: string;
  carouselName?: string;
  author?: string;
  metadata?: string;
  urlAuthor?: string;
  typeView: TypeView;
  products: Product[];
}
