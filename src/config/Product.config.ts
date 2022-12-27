export interface DataCategoryProps {
  id: number;
  categoryName: string;
}

export interface ProductDataProps {
  image: string;
  productName: string;
  categoryId: number;
  categoryName: string;
  description: string;
  price: number;
}

export interface ProductDetailProps extends ProductDataProps {
  id: number;
}
