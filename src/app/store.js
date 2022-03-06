import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from '../features/Catalog/CatatalogSlice';

export default configureStore({
  reducer: {
    catalog: catalogReducer
  }
});
