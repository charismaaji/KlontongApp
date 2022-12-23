import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProductDataProps, ProductDetailProps} from '../../config';
import {
  changeProductDetail,
  changeIsEdit,
  fetchListProduct,
  fetchAddProduct,
  fetchUpdateProduct,
} from '../state/ProductReducer';
import {ProductReducerProps} from '../state/redux.config';

export default () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {currentProduct, isEditMode, listProduct} = useSelector(
    (state: ProductReducerProps) => state.product,
  );

  function changeCurrentProduct(productData: ProductDetailProps) {
    // @ts-ignore
    dispatch(changeProductDetail(productData));
  }

  function changeIsEditMode(isEdit: boolean) {
    // @ts-ignore
    dispatch(changeIsEdit(isEdit));
  }

  async function getProductList(limit: number, page: number, q: string) {
    setLoading(true);
    try {
      // @ts-ignore
      const res = await dispatch(fetchListProduct(limit, page, q));

      return {
        data: res,
      };
    } catch (error) {
      return {error: true};
    } finally {
      setLoading(false);
    }
  }

  async function addProductList(data: ProductDataProps) {
    setLoading(true);
    try {
      // @ts-ignore
      const res = await dispatch(fetchAddProduct(data));

      if (res.error) {
        throw res.error;
      }

      return {success: true};
    } catch (error) {
      return {error: true};
    } finally {
      setLoading(false);
    }
  }

  async function updateProduct(data: ProductDataProps, productId: number) {
    setLoading(true);

    try {
      // @ts-ignore
      const res = await dispatch(fetchUpdateProduct(data, productId));
      console.log(res.productName);
      return {
        data: res,
      };
    } catch (error) {
      return {error: true};
    } finally {
      setLoading(false);
    }
  }

  return {
    currentProduct,
    changeIsEditMode,
    isEditMode,
    getProductList,
    loading,
    listProduct,
    addProductList,
    changeCurrentProduct,
    updateProduct,
  };
};
