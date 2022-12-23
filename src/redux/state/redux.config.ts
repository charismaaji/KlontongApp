import {ProductDetailProps} from '../../config';

export interface ProductReducerProps {
  product: {
    currentProduct: ProductDetailProps;
    isEditMode: boolean;
    listProduct: ProductDetailProps[];
  };
}
