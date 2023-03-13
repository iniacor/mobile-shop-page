type ProductType = {
  id: string;
  title: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  full_description: string;
  attributes: {
    category: string;
    type?: undefined;
    material?: undefined;
    design?: undefined;
  };
};
export default ProductType;
