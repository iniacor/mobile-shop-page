type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  attributes: {
    category?: string;
    type?: string;
    material?: string;
    design?: string;
  }[];
};

export default Product;
