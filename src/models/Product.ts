import ProductAttribute from "@/models/ProductAttribute";
export default interface Product {
  id?: string;
  name: string;
  slug?: string;
  about: string;
  attribute: ProductAttribute;
  images: string[];
}
