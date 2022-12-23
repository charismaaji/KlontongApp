import {createSlice, Dispatch} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL, ProductDataProps, ProductDetailProps} from '../../config';

const initialState = {
  isEditMode: false,
  listProduct: [],
  currentProduct: {
    id: 0,
    image: '',
    productName: '',
    categoryId: 0,
    categoryName: '',
    description: '',
    price: 0,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    changeIsEdit: (state, action) => {
      state.isEditMode = action.payload;
    },
    listProduct: (state, action) => {
      state.listProduct = action.payload;
    },
    updateProduct: (state, action) => {},
  },
});

const actions = productSlice.actions;

// Exported Actions
export const changeProductDetail =
  (data: ProductDetailProps) => (dispatch: Dispatch) => {
    dispatch(actions.changeCurrentProduct(data));
  };

export const changeIsEdit = (isEdit: boolean) => (dispatch: Dispatch) => {
  dispatch(actions.changeIsEdit(isEdit));
};

export const fetchListProduct =
  (limit: number, page: number, q: string) => async (dispatch: Dispatch) => {
    const result = await axios.get(
      `${BASE_URL}?_page=${page}&_limit=${limit}&q=${q}`,
    );
    dispatch(actions.listProduct(result.data));
    return result.data;
  };

export const fetchAddProduct =
  (data: ProductDataProps) => async (dispatch: Dispatch) => {
    const result = await axios.post(BASE_URL, data);
    return result.data;
  };

export const fetchUpdateProduct =
  (data: ProductDataProps, productId: number) => async (dispatch: Dispatch) => {
    const result = await axios.put(`${BASE_URL}/${productId}`, data);
    return result.data;
  };

export default productSlice.reducer;
